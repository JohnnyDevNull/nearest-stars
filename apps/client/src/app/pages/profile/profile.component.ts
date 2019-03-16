import { Component, OnInit } from '@angular/core';
import { UserModel, UserProfileModel } from '@nearest-stars/schema';
import { ProfileService } from './profile.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nearest-stars-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: UserModel | null = {
    username: '',
    email: ''
  };

  public profile: UserProfileModel | null = {
    firstName: '',
    lastName: '',
    birthDate: null,
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    zipCode: '',
    city: '',
    phone1: '',
    phone2: '',
    country: '',
    backupEmail: '',
  }

  public constructor(
    private compServ: ProfileService
  ) {
  }

  public ngOnInit(): void {
    this.compServ.load().subscribe((res) => {
      this.user = res.data;
    })
  }

  public onSubmit(f: NgForm): void {
    console.log(f);
  }

  public onDiscard(f: NgForm): void {
    f.resetForm();
  }
}
