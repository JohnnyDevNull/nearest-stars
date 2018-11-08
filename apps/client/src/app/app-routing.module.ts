import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './comps/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'home', component: HomeComponent },
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
