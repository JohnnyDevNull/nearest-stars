import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [ SearchComponent ],
  exports: [ SearchComponent ],
  imports: [ CommonModule ]
})
export class SearchModule {}
