import { Component, OnInit } from '@angular/core';
import { NotifyService } from '@client-services/notify/notify.service';
import { UserModel } from '@nearest-stars/schema';
import { AdminUsersService } from './admin-users.service';

@Component({
  selector: 'nearest-stars-admin-users',
  templateUrl: './admin-users.component.html'
})
export class AdminUsersComponent implements OnInit {

  public users: UserModel[] = [];

  public constructor (
    private admServ: AdminUsersService,
    private msgServ: NotifyService
  ) {
  }

  public ngOnInit(): void {
    this.load();
  }

  public onDeleteRow(userId: number) {
    this.admServ.deleteUser(userId).subscribe(
      (res) => this.msgServ.showMessageByResult(res),
      (err) => this.msgServ.showMessageByResult(err)
    );
  }

  public onSync(): void {
    this.load();
  }

  private load(): void {
    const subs = this.admServ.fetchUserList().subscribe(() => {
      this.users = this.admServ.getUserList();
      subs.unsubscribe();
    },
    (err) => this.msgServ.showMessageByResult(err));
  }
}
