import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticlesItemComponent } from './admin-articles/admin-articles-item/admin-articles-item.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminBlogsItemComponent } from './admin-blogs/admin-blogs-item/admin-blogs-item.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AdminCategoriesItemComponent } from './admin-categories/admin-categories-item/admin-categories-item.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';
import { AdminExportComponent } from './admin-export/admin-export.component';
import { AdminImportComponent } from './admin-import/admin-import.component';
import { AdminUserGroupsItemComponent } from './admin-user-groups/admin-user-groups-item/admin-user-groups-item.component';
import { AdminUserGroupsComponent } from './admin-user-groups/admin-user-groups.component';
import { AdminUsersItemComponent } from './admin-users/admin-users-item/admin-users-item.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'dashboard', component: AdminDasboardComponent},
    { path: 'users', component: AdminUsersComponent },
    { path: 'users/item/:mode', component: AdminUsersItemComponent },
    { path: 'users/item/:mode/:index', component: AdminUsersItemComponent },
    { path: 'groups', component: AdminUserGroupsComponent },
    { path: 'groups/item/:mode', component: AdminUserGroupsItemComponent },
    { path: 'groups/item/:mode/:index', component: AdminUserGroupsItemComponent },
    { path: 'import', component: AdminImportComponent },
    { path: 'export', component: AdminExportComponent },
    { path: 'blogs', component: AdminBlogsComponent },
    { path: 'blogs/item/:mode', component: AdminBlogsItemComponent },
    { path: 'blogs/item/:mode/:id', component: AdminBlogsItemComponent },
    { path: 'categories', component: AdminCategoriesComponent },
    { path: 'categories/item/:mode', component: AdminCategoriesItemComponent },
    { path: 'categories/item/:mode/:id', component: AdminCategoriesItemComponent },
    { path: 'articles', component: AdminArticlesComponent },
    { path: 'articles/item/:mode', component: AdminArticlesItemComponent },
    { path: 'articles/item/:mode/:id', component: AdminArticlesItemComponent }
  ] }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
