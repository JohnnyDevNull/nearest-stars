import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@client-services/index';

@Component({
  selector: 'nearest-stars-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  public userName = '';
  public isLoggedIn = false;

  public constructor(
    private stateServ: AppStateService
  ) {
  }

  public ngOnInit(): void {
    this.stateServ.propagation.subscribe(v => {
      if (['init', 'user-auth'].includes(v)) {
        this.userName = this.stateServ.getUserName();
        this.isLoggedIn = this.stateServ.isLoggedIn();
      }
    });
  }

  public toggleLeftSideNav(): void {

  }
}
