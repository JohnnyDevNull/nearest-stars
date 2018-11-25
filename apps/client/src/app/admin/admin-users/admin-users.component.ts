import { UserModel, BaseRestModel } from '@nearest-stars/data-models';
import { Component, OnInit } from '@angular/core';
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
    this.admServ.getUserList().subscribe((res) => {
      this.users = res.data;
    });
  }

}
