import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserModel, BaseRestModel } from '@nearest-stars/data-models';
import { Subscription } from 'rxjs';
import { AdminUsersService } from './../admin-users.service';
import { MsglineService } from '../../../comps/msgline/msgline.service';
import { MsglineTypeEnum } from '../../../comps/msgline/msgline-type.enum';

@Component({
  selector: 'nearest-stars-admin-users-item',
  templateUrl: './admin-users-item.component.html'
})
export class AdminUsersItemComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public mode: string;
  public index: number | null = null;

  public item: UserModel | null = null;

  public constructor (
    private route: ActivatedRoute,
    private router: Router,
    private admServ: AdminUsersService,
    private msgServ: MsglineService
  ) {
  }

  public ngOnInit(): void {
    this.mode = this.route.snapshot.params['mode'];
    this.index = this.route.snapshot.params['index'] !== undefined
            ? +this.route.snapshot.params['index']
            : null;
    this.fetchItem();

    this.subs.push(this.route.params.subscribe((params: Params) => {
      this.mode = params['mode'];
      this.index = this.route.snapshot.params['index'] !== undefined
              ? +this.route.snapshot.params['index']
              : 0;
      this.fetchItem();
    }));
  }

  public ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  public onSubmit(f: NgForm): void {
    if (!f.valid) {
      return;
    }

    const user: UserModel = {};
    const {username, password, email, activated, locked} = f.value;

    user.username = username;
    // user.email = email;

    if (activated !== undefined) {
      user.activated = activated;
    }

    if (locked !== undefined) {
      user.locked = locked;
    }

    if (password !== undefined && password.length > 0) {
      user.password = password;
    }

    if (this.mode === 'edit' && this.item.id !== null) {
      user.id = this.item.id;
      this.admServ.updateUser(user).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    } else if (this.mode === 'new' && this.item.id === null) {
      this.admServ.createUser(user).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    }
  }

  public onDelete(userId: number): void {
    this.admServ.deleteUser(userId).subscribe(
      (res) => this.msgServ.showMessageByResult(res),
      (err) => this.msgServ.showMessageByResult(err)
    );
  }

  private fetchItem(): void {
    this.item = {
      id: null,
      username: '',
      password: '',
      email: '',
      activated: false,
      locked: false
    };

    if (this.mode === 'edit' && this.index !== null) {
      const item = this.admServ.getUserByIndex(this.index);

      if (item !== null) {
        this.item = item;
      } else {
        this.router.navigate(['/admin/users']);
      }
    }
  }
}
