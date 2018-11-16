import { SigninService } from './signin.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '@nearest-stars/data-models';

@Component({
  selector: 'nearest-stars-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  constructor(
    private signinServ: SigninService
  ) {
  }

  ngOnInit() {
  }

  onSignin(f: NgForm) {
    console.log(f.value);
    if (!f.valid) {
      return;
    }

    const user: UserModel = {
      email: f.value.email,
      password: f.value.password
    };

    this.signinServ.doSignin(user).subscribe(
      (res) => console.log(res)
    );
  }
}
