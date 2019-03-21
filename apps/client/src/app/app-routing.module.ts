import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsBlogComponent } from '@client-modules/cms/cms-blog/cms-blog.component';
import { MainComponent } from '@client-modules/main/main.component';
import { SearchComponent } from '@client-modules/search/search.component';
import { DocsComponent } from '@client-pages/docs/docs.component';
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
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'objects', loadChildren: './modules/objects/objects.module#ObjectsModule' },
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
