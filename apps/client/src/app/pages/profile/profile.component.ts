import { Component, OnInit } from '@angular/core';
import { UserModel } from '@nearest-stars/data-models';
import { ProfileService } from './profile.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nearest-stars-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public user: UserModel | null = {
    username: '',
    email: ''
  };

  public constructor(
    private compServ: ProfileService
  ) {
  }

  public ngOnInit(): void {
    this.compServ.load().subscribe((res) => {
      console.log(res);
      this.user = res.data;
    })
  }

  public onSubmit(f: NgForm): void {
    console.log(f);
  }
}
