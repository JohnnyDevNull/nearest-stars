import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ]
})
export class PagesModule {}
