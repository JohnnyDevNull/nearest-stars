import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'nearest-stars-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  public activatedSelector: string;

  constructor (
    private resolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
  }

  onRouterOutletActivate(component) {
    this.activatedSelector = this.resolver.resolveComponentFactory(component.constructor).selector;
  }
}
