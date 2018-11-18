import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SigninService } from './signin/signin.service';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';

@NgModule({
  declarations: [
    HomeComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent,
    ProfileComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    SignupService,
    SigninService
  ]
})
export class PagesModule {}
