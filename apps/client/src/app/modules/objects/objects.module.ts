import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectsRoutingModule } from './objects-routing.module';
import { ObjectsComponent } from './objects.component';
import { ObjectsGridComponent } from './objects-grid/objects-grid.component';
import { SystemsGridComponent } from './systems-grid/systems-grid.component';
import { ObjectItemComponent } from './object-item/object-item.component';
import { SystemItemComponent } from './system-item/system-item.component';
import { MaterialModule } from '@client-modules/material/material.module';
import { ObjectsService } from '@client-modules/objects/services/objects.service';
import { SystemsService } from '@client-modules/objects/services/systems.service';

@NgModule({
  declarations: [
    ObjectsComponent,
    ObjectsGridComponent,
    SystemsGridComponent,
    ObjectItemComponent,
    SystemItemComponent,
  ],
  imports: [
    CommonModule,
    ObjectsRoutingModule,
    MaterialModule
  ],
  providers: [
    ObjectsService,
    SystemsService
  ]
})
export class ObjectsModule {
}
