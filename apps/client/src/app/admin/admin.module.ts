import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminUserGroupsComponent } from './admin-user-groups/admin-user-groups.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminDasboardComponent,
    AdminUsersComponent,
    AdminUserGroupsComponent,
    AdminComponent
  ],
  exports: [
    AdminDasboardComponent,
    AdminUsersComponent,
    AdminUserGroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class AdminModule {}
