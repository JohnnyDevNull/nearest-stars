import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';
import { AdminImportComponent } from './admin-import/admin-import.component';
import { AdminUserGroupsComponent } from './admin-user-groups/admin-user-groups.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminDasboardComponent,
    AdminUsersComponent,
    AdminUserGroupsComponent,
    AdminComponent,
    AdminImportComponent
  ],
  exports: [
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
