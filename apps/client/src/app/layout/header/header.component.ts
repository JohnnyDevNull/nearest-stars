import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '@client-modules/index';
import { StateService } from '@client-services/index';

@Component({
  selector: 'nearest-stars-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public isCollapsed = true;

  constructor(
    private stateServ: StateService,
    private searchServ: SearchService
  ) {
  }

  public isLoggedIn(): boolean {
    return this.stateServ.getIsLoggedIn();
  }

  public onSubmit(f: NgForm): void {
    this.searchServ.searchSubj.next({
      context: 'Search',
      pattern: f.value.search
    });
  }
}
