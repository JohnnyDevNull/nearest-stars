import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '../../services/state/state-service';
import { SearchService } from '../search/search.service';

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
