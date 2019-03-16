import { Component, OnInit } from '@angular/core';
import { UserGroupModel } from '@nearest-stars/schema';
import { AdminUserGroupsService } from './admin-user-groups.service';

@Component({
  selector: 'nearest-stars-admin-user-groups',
  templateUrl: './admin-user-groups.component.html',
  styleUrls: ['./admin-user-groups.component.scss']
})
export class AdminUserGroupsComponent implements OnInit {

  public userGroups: UserGroupModel[] = [];
  public userGroupsColumns: string[] = [
    'id', 'name', 'type',
    'createdAt', 'updatedAt', 'activatedAt',
    'actions'
  ];

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
