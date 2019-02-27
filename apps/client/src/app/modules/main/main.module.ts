import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [ MainComponent ],
  imports: [ CommonModule, MaterialModule, AppRoutingModule ],
  exports: [ MainComponent ]
})
export class MainModule {}
