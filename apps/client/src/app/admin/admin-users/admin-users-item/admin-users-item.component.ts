import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserModel } from '@nearest-stars/data-models';
import { DxFormComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';
import { NotifyService } from '../../../services/notify/notify.service';
import { AdminUserGroupsService } from '../../admin-user-groups/admin-user-groups.service';
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
  public userGroups = [];
  public selectedGroups = [];

  @ViewChild('dxForm')
  public dxForm: DxFormComponent;

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
    this.index = this.route.snapshot.params['index'] !== undefined
            ? +this.route.snapshot.params['index']
            : null;
    this.fetchItem();
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

  public onDxSubmit(): void {
    if (!this.dxForm.instance.validate().isValid) {
      return;
    }

    const user: UserModel = {};
    const {username, password, email, activated, locked} = this.dxForm.formData;

    user.username = username;
    user.email = email;

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

  public onDiscard(): void {
    console.log(this.origItem);
    if (this.origItem) {
      this.item = Object.create(this.origItem);
    } else {
      this.dxForm.instance.resetValues();
      this.selectedGroups = [];
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
}
