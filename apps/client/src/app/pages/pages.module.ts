import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SigninService } from './signin/signin.service';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent
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
