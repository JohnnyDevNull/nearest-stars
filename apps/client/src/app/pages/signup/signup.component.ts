import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifyService } from '@client-services/index';
import { UserModel } from '@nearest-stars/schema';
import { Subscription } from 'rxjs';
import { SignupService } from './signup.service';

@Component({
  selector: 'nearest-stars-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public error = '';

  public constructor(
    private signupServ: SignupService,
    private msgServ: NotifyService
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
      (res) => this.msgServ.showMessageByResult(res),
      (err) => this.msgServ.showMessageByResult(err)
    ));
  }
}
