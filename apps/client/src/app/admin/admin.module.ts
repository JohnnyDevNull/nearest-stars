import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@client-modules/index';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AdminArticlesItemComponent } from './admin-articles/admin-articles-item/admin-articles-item.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminBlogsItemComponent } from './admin-blogs/admin-blogs-item/admin-blogs-item.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AdminCategoriesItemComponent } from './admin-categories/admin-categories-item/admin-categories-item.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';
import { AdminExportComponent } from './admin-export/admin-export.component';
import { AdminImportComponent } from './admin-import/admin-import.component';
import { AdminRoutingModule } from './admin-routing.module';
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
    AdminBlogsItemComponent,
    AdminCategoriesComponent,
    AdminArticlesComponent,
    AdminArticlesItemComponent,
    AdminCategoriesItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MaterialModule,
    EditorModule
  ]
})
export class AdminModule {}
