import { Component, OnInit } from '@angular/core';
import { ObjectsService } from '@client-modules/objects/services/objects.service';
import { SystemsService } from '@client-modules/objects/services/systems.service';

@Component({
  selector: 'nearest-stars-system-item',
  templateUrl: './system-item.component.html',
  styles: []
})
export class SystemItemComponent implements OnInit {

  public constructor(
    private objService: ObjectsService,
    private sysService: SystemsService
  ) {
  }

  public ngOnInit(): void {
  }

  public doSubmit(f): void {
    if (!f.valid) {
      return;
    }
    console.log(f);
  }

}
