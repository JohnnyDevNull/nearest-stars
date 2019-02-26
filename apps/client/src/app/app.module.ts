import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NxModule } from '@nrwl/nx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmsModule } from './cms/cms.module';
import { CompsModule } from './comps/comps.module';
import { DocsModule } from './docs/docs.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    CmsModule,
    CompsModule,
    DocsModule,
    PagesModule,
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
