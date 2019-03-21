import { Component, OnInit } from '@angular/core';
import { ObjectsService } from '@client-modules/objects/services/objects.service';
import { SystemsService } from '@client-modules/objects/services/systems.service';

@Component({
  selector: 'nearest-stars-object-item',
  templateUrl: './object-item.component.html',
  styles: []
})
export class ObjectItemComponent implements OnInit {

  public constructor(
    private objService: ObjectsService,
    private sysService: SystemsService
  ) {
  }

  public ngOnInit(): void {
  }

}
