import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogsItemComponent } from './admin/admin-blogs/admin-blogs-item/admin-blogs-item.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';
import { AdminDasboardComponent } from './admin/admin-dasboard/admin-dasboard.component';
import { AdminExportComponent } from './admin/admin-export/admin-export.component';
import { AdminImportComponent } from './admin/admin-import/admin-import.component';
import { AdminUserGroupsItemComponent } from './admin/admin-user-groups/admin-user-groups-item/admin-user-groups-item.component';
import { AdminUserGroupsComponent } from './admin/admin-user-groups/admin-user-groups.component';
import { AdminUsersItemComponent } from './admin/admin-users/admin-users-item/admin-users-item.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './comps/blog/blog.component';
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
    { path: 'blog', component: BlogComponent },
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
      { path: 'users/item/:mode/:id', component: AdminUsersItemComponent },
      { path: 'groups', component: AdminUserGroupsComponent },
      { path: 'groups/item/:mode', component: AdminUserGroupsItemComponent },
      { path: 'groups/item/:mode/:id', component: AdminUserGroupsItemComponent },
      { path: 'import', component: AdminImportComponent },
      { path: 'export', component: AdminExportComponent },
      { path: 'blogs', component: AdminBlogsComponent },
      { path: 'blogs/item/:mode', component: AdminBlogsItemComponent },
      { path: 'blogs/item/:mode/:id', component: AdminBlogsItemComponent }
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
