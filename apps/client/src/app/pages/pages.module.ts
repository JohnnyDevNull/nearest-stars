import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';

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
    FormsModule
  ],
  providers: [
  ]
})
export class PagesModule {}
