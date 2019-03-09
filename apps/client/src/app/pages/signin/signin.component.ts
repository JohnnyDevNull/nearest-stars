import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStateService, NotifyService } from '@client-services/index';
import { UserModel } from '@nearest-stars/schema';
import * as HttpStatus from 'http-status-codes';
import { SigninService } from './signin.service';

@Component({
  selector: 'nearest-stars-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public constructor(
    private signinServ: SigninService,
    private msgServ: NotifyService,
    private stateServ: AppStateService,
    private router: Router
  ) {
  }

  public ngOnInit() {
  }

  public onSignin(f: NgForm): void {

    if (!f.valid) {
      return;
    }

    const user: UserModel = {
      email: f.value.email,
      password: f.value.password
    };

    this.signinServ.doSignin(user).subscribe(
      (res) => {
        if (res.meta.code === HttpStatus.CREATED && !res.meta.error) {
          this.stateServ.setAuthData(res.data, !!f.value.remember);
          this.stateServ.propagation.next('user-auth');
          this.router.navigate(['/profile']);
        } else {
          this.msgServ.showMessageByResult(res)
        }
      },
      (err) => this.msgServ.showMessageByResult(err)
    );
  }
}
