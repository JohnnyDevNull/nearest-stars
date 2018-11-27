import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserModel } from '@nearest-stars/data-models';
import { Subscription } from 'rxjs';
import { AdminUsersService } from './../admin-users.service';

@Component({
  selector: 'nearest-stars-admin-users-item',
  templateUrl: './admin-users-item.component.html'
})
export class AdminUsersItemComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public mode: string;
  public id: number | null = null;

  public item: UserModel | null = null;

  constructor(
    private route: ActivatedRoute,
    private admServ: AdminUsersService
  ) {
  }

  ngOnInit() {
    this.mode = this.route.snapshot.params['mode'];
    this.id = this.route.snapshot.params['id'] !== undefined
            ? +this.route.snapshot.params['id']
            : null;
    this.fetchItem();

    this.subs.push(this.route.params.subscribe((params: Params) => {
      this.mode = params['mode'];
      this.id = this.route.snapshot.params['id'] !== undefined
              ? +this.route.snapshot.params['id']
              : 0;
      this.fetchItem();
    }));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    const user: UserModel = {};
    const {username, password, email} = f.value;
    user.id = this.item.id;
    user.username = username;
    user.email = email;

    if (password !== undefined && password.length > 0) {
      user.password = password;
    }

    if (this.mode === 'edit' && this.item.id !== null) {
      this.admServ.updateUser(user).subscribe((res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      });
    } else if (this.mode === 'new' && this.item.id === null) {
      this.admServ.createUser(user).subscribe((res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      });
    }
  }

  fetchItem() {
    this.item = {
      id: null,
      username: '',
      password: '',
      email: ''
    }
    if (this.mode === 'edit' && this.id !== null) {
      const item = this.admServ.getUserByIndex(this.id);
      if (item !== null) {
        this.item = item;
      }
    }
  }
}
