import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';

@NgModule({
  declarations: [
    AdminDasboardComponent
  ],
  exports: [
    AdminDasboardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class AdminModule {}
