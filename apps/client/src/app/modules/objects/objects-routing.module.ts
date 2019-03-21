import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectsComponent } from './objects.component';
import { ObjectItemComponent } from './object-item/object-item.component';
import { SystemItemComponent } from './system-item/system-item.component';

const routes: Routes = [
  { path: '', component: ObjectsComponent, children: [
    { path: 'o-item', component: ObjectItemComponent },
    { path: 's-item', component: SystemItemComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectsRoutingModule { }
