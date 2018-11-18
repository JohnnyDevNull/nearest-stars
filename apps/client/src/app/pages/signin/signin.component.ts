import { TokenResponseModel } from './../../../../../../libs/data-models/src/lib/token-response.model';
import { SigninService } from './signin.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '@nearest-stars/data-models';
import { Router } from '@angular/router';
import { StateService } from '../../services/state/state-service';

@Component({
  selector: 'nearest-stars-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  public error = '';

  constructor(
    private signinServ: SigninService,
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
        if (res.meta !== undefined && res.meta.error === true) {
          this.error = res.meta.message;
        } else {
          this.stateServ.loginSubj.next(res.data);
          this.router.navigate(['/profile']);
        }
      },
      (err) => {
        if (err.error !== undefined && err.error.meta !== undefined) {
          this.error = err.error.meta.message;
        } else if (err.message !== undefined) {
          this.error = err.message;
        } else {
          this.error = 'Unknown error';
        }
      }
    );
  }
}
