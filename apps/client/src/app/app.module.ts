import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@client-layout/index';
import { CmsModule, SearchModule } from '@client-modules/index';
import { PagesModule } from '@client-pages/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NxModule } from '@nrwl/nx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    CmsModule,
    LayoutModule,
    PagesModule,
    SearchModule,
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
