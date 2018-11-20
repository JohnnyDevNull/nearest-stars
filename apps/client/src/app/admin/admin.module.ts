import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { AdminBlogsItemComponent } from './admin-blogs/admin-blogs-item/admin-blogs-item.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';
import { AdminExportComponent } from './admin-export/admin-export.component';
import { AdminImportComponent } from './admin-import/admin-import.component';
import { AdminUserGroupsItemComponent } from './admin-user-groups/admin-user-groups-item/admin-user-groups-item.component';
import { AdminUserGroupsComponent } from './admin-user-groups/admin-user-groups.component';
import { AdminUsersItemComponent } from './admin-users/admin-users-item/admin-users-item.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminDasboardComponent,
    AdminUsersComponent,
    AdminUserGroupsComponent,
    AdminComponent,
    AdminImportComponent,
    AdminExportComponent,
    AdminBlogsComponent,
    AdminUsersItemComponent,
    AdminUserGroupsItemComponent,
    AdminBlogsItemComponent
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
