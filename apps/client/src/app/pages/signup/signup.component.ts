import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '@nearest-stars/data-models';
import { Subscription } from 'rxjs';
import { SignupService } from './signup.service';

@Component({
  selector: 'nearest-stars-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public error = '';

  public constructor(
    private signupServ: SignupService
  ) {
  }

  public ngOnInit() {
  }

  public ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  public onSignUp(f: NgForm) {
    if (!f.valid) {
      return;
    }

    const user: UserModel = {
      username: f.value.username,
      password: f.value.password,
      email: f.value.email
    };

    this.subs.push(this.signupServ.doSignup(user).subscribe(
      (res) => console.log(res),
      (err) => {
        if (err.error !== undefined && err.error.meta !== undefined) {
          this.error = err.error.meta.message;
        } else if (err.message !== undefined) {
          this.error = err.message;
        } else {
          this.error = 'Unknown error';
        }
      }
    ));
  }
}
