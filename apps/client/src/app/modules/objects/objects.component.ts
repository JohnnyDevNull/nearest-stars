import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nearest-stars-objects',
  template: `
  <router-outlet *ngIf="hasChild; else grid"></router-outlet>
  <ng-template #grid>
    <mat-tab-group>
      <mat-tab label="Objects">
        <ng-template matTabContent>
          <nearest-stars-objects-grid></nearest-stars-objects-grid>
        </ng-template>
      </mat-tab>
      <mat-tab label="Systems">
        <ng-template matTabContent>
          <nearest-stars-systems-grid></nearest-stars-systems-grid>
        </ng-template>
      </mat-tab>
    </mat-tab-group>
  </ng-template>
  `,
  styles: []
})
export class ObjectsComponent implements OnInit {
  public hasChild = false;

  public constructor(
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit (): void {
    if (this.route.children.length > 0) {
      this.hasChild = true;
    }
  }

}
