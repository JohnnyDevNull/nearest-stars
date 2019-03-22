import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nearest-stars-objects',
  template: `
  <nav mat-tab-nav-bar>
    <a mat-tab-link
       *ngFor="let link of navLinks"
       [routerLink]="link.path"
       routerLinkActive #rla="routerLinkActive"
       [active]="rla.isActive">
      {{link.label}}
    </a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class ObjectsComponent implements OnInit {
  public navLinks = [
    { path: '/objects/o-grid', label: 'Objects'},
    { path: '/objects/s-grid', label: 'Systems'}
  ];

  public constructor() {}
  public ngOnInit (): void {}
}
