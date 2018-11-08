import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabylonModule } from './babylon/babylon.module';
import { CompsModule } from './comps/comps.module';
import { DocsModule } from './docs/docs.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    AdminModule,
    BabylonModule,
    CompsModule,
    DocsModule,
    PagesModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
