import { Component, OnInit } from '@angular/core';
import { UserGroupModel } from '@nearest-stars/data-models';
import { AdminUserGroupsService } from './admin-user-groups.service';

@Component({
  selector: 'nearest-stars-admin-user-groups',
  templateUrl: './admin-user-groups.component.html'
})
export class AdminUserGroupsComponent implements OnInit {

  public userGroups: UserGroupModel[] = [];

  public constructor (
    private admServ: AdminUserGroupsService
  ) {
  }

  public ngOnInit(): void {
    this.load();
  }

  public onDeleteRow(userGroupId: number): void {
    this.admServ.deleteUserGroup(userGroupId).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  public onSync(): void {
    this.load();
  }

  private load(): void {
    const subs = this.admServ.fetchUserGroupList().subscribe(() => {
      this.userGroups = this.admServ.getUserGroupList();
      subs.unsubscribe();
    });
  }
}
