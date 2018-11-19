import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDasboardComponent } from './admin/admin-dasboard/admin-dasboard.component';
import { MainComponent } from './comps/main/main.component';
import { SearchComponent } from './comps/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignoutComponent } from './pages/signout/signout.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signout', component: SignoutComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'search', component: SearchComponent },
    { path: 'admin', component: AdminDasboardComponent },
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
