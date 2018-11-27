import { Component, OnInit } from '@angular/core';
import { UserModel } from '@nearest-stars/data-models';
import { AdminUsersService } from './admin-users.service';

@Component({
  selector: 'nearest-stars-admin-users',
  templateUrl: './admin-users.component.html'
})
export class AdminUsersComponent implements OnInit {

  public users: UserModel[] = [];

  public constructor (
    private admServ: AdminUsersService
  ) {
  }

  public ngOnInit(): void {
    this.load();
  }

  public onDeleteRow(index: number) {
    console.log('onDeleteRow ' + index);
  }

  public onSync(): void {
    this.load();
  }

  private load(): void {
    const subs = this.admServ.fetchUserList().subscribe(() => {
      this.users = this.admServ.getUserList();
      subs.unsubscribe();
    });
  }
}
