import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticlesItemComponent } from './admin/admin-articles/admin-articles-item/admin-articles-item.component';
import { AdminArticlesComponent } from './admin/admin-articles/admin-articles.component';
import { AdminBlogsItemComponent } from './admin/admin-blogs/admin-blogs-item/admin-blogs-item.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';
import { AdminCategoriesItemComponent } from './admin/admin-categories/admin-categories-item/admin-categories-item.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminDasboardComponent } from './admin/admin-dasboard/admin-dasboard.component';
import { AdminExportComponent } from './admin/admin-export/admin-export.component';
import { AdminImportComponent } from './admin/admin-import/admin-import.component';
import { AdminUserGroupsItemComponent } from './admin/admin-user-groups/admin-user-groups-item/admin-user-groups-item.component';
import { AdminUserGroupsComponent } from './admin/admin-user-groups/admin-user-groups.component';
import { AdminUsersItemComponent } from './admin/admin-users/admin-users-item/admin-users-item.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { CmsBlogComponent } from './cms/cms-blog/cms-blog.component';
import { MainComponent } from './comps/main/main.component';
import { SearchComponent } from './comps/search/search.component';
import { DocsComponent } from './docs/docs.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignoutComponent } from './pages/signout/signout.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: CmsBlogComponent },
    { path: 'docs', component: DocsComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signout', component: SignoutComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'search', component: SearchComponent },
    { path: 'admin', component: AdminComponent, children: [
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
    ] },
    { path: '**', redirectTo: 'home' }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
