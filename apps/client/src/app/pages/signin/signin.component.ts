import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from '@client-services/notify/notify.service';
import { StateService } from '@client-services/state/state-service';
import { UserModel } from '@nearest-stars/data-models';
import * as HttpStatus from 'http-status-codes';
import { SigninService } from './signin.service';

@Component({
  selector: 'nearest-stars-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  constructor(
    private signinServ: SigninService,
    private msgServ: NotifyService,
    private stateServ: StateService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSignin(f: NgForm) {

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
          res.data.useLocalStorage = f.value.remember ? true : false;
          this.stateServ.loginSubj.next(res.data);
          this.router.navigate(['/profile']);
        } else {
          this.msgServ.showMessageByResult(res)
        }
      },
      (err) => this.msgServ.showMessageByResult(err)
    );
  }
}
