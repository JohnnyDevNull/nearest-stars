import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CmsModule, MainModule, MaterialModule, SearchModule } from '@client-modules/index';
import { PagesModule } from '@client-pages/index';
import { NxModule } from '@nrwl/nx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    MainModule,
    AppRoutingModule,
    MaterialModule,
    CmsModule,
    PagesModule,
    SearchModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
