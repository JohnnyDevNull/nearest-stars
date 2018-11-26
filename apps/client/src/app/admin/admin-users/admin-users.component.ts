import { Component, OnInit } from '@angular/core';
import { UserModel } from '@nearest-stars/data-models';
import { AdminUsersService } from './admin-users.service';

@Component({
  selector: 'nearest-stars-admin-users',
  templateUrl: './admin-users.component.html'
})
export class AdminUsersComponent implements OnInit {

  public users: UserModel[] = [];

  constructor(
    private admServ: AdminUsersService
  ) {
  }

  ngOnInit() {
    this.admServ.fetchUserList().subscribe(() => {
      this.users = this.admServ.getUserList();
    });
  }

  onDeleteRow(index: number) {
    console.log('onDeleteRow ' + index);
  }

}
