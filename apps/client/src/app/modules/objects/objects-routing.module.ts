import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectsComponent } from './objects.component';
import { ObjectItemComponent } from './object-item/object-item.component';
import { SystemItemComponent } from './system-item/system-item.component';
import { SystemsGridComponent } from './systems-grid/systems-grid.component';
import { ObjectsGridComponent } from './objects-grid/objects-grid.component';

const routes: Routes = [
  { path: '', component: ObjectsComponent, children: [
    { path: 'o-grid', component: ObjectsGridComponent },
    { path: 'o-grid/item', component: ObjectItemComponent },
    { path: 's-grid', component: SystemsGridComponent },
    { path: 's-grid/item', component: SystemItemComponent },
    { path: '**', redirectTo: 'o-grid' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectsRoutingModule { }
