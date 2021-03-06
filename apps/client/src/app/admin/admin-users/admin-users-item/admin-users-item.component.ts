import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminUserGroupsService } from '@client-admin/admin-user-groups/admin-user-groups.service';
import { NotifyService } from '@client-services/notify/notify.service';
import { UserGroupModel, UserModel } from '@nearest-stars/schema';
import { Subscription } from 'rxjs';
import { isArray } from 'util';
import { AdminUsersService } from '../admin-users.service';

@Component({
  selector: 'nearest-stars-admin-users-item',
  templateUrl: './admin-users-item.component.html'
})
export class AdminUsersItemComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public mode: string;
  public index: number | null = null;

  public origItem: UserModel | null = null;
  public item: UserModel | null = null;
  public userGroups: UserGroupModel[] = [];

  public constructor (
    private route: ActivatedRoute,
    private router: Router,
    private admServ: AdminUsersService,
    private groupsServ: AdminUserGroupsService,
    private msgServ: NotifyService
  ) {
  }

  public ngOnInit(): void {
    this.mode = this.route.snapshot.params['mode'];
    this.fetchGroups();

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
    const {username, password, email, activated, locked, groups} = f.value;

    user.username = username;
    user.email = email;

    if (isArray(groups) && groups.length > 0) {
      user.groups = groups;
    } else {
      user.groups = [];
    }

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

  public onDelete(): void {
    this.admServ.deleteUser(this.item.id).subscribe(
      (res) => this.msgServ.showMessageByResult(res),
      (err) => this.msgServ.showMessageByResult(err)
    );
  }

  public onDiscard(f: NgForm): void {
    if (this.origItem) {
      this.item = Object.create(this.origItem);
    } else {
      f.resetForm();
    }
  }

  private fetchItem(): void {
    this.origItem = null;
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
        this.item = Object.create(item);
        this.origItem = Object.create(item);
      } else {
        this.router.navigate(['/admin/users']);
      }
    }
  }

  public fetchGroups(): void {
    this.subs.push(this.groupsServ.fetchUserGroupList().subscribe(
      () => {
        this.userGroups = this.groupsServ.getUserGroupList();
      },
      (err) => console.log(err))
    );
  }

  public isGroupSelected(groupId: Number) {
    if (
      this.item !== null
      && this.item.groups !== undefined
      && isArray(this.item.groups)
    ) {
      this.item.groups.forEach(i => {
        if (i.id === groupId) {
          return true;
        }
      });
    }
    return false;
  }
}
