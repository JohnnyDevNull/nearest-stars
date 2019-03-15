import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '@client-services/index';

@Component({
  selector: 'nearest-stars-signout',
  templateUrl: './signout.component.html'
})
export class SignoutComponent implements OnInit {

  constructor(
    private stateServ: AppStateService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSignOut() {
    this.stateServ.resetAuthData(true);
    this.router.navigate(['/signin']);
  }
}
