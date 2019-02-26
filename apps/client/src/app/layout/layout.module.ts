import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppIconModule } from '../modules/icon/app-icon.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    AppIconModule
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class LayoutModule {}
