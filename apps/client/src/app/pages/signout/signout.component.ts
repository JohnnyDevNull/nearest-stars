import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state-service';
import { Router } from '@angular/router';

@Component({
  selector: 'nearest-stars-signout',
  templateUrl: './signout.component.html'
})
export class SignoutComponent implements OnInit {

  constructor(
    private stateServ: StateService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSignOut() {
    this.stateServ.logoutSubj.next(1);
    this.router.navigate(['/signin']);
  }
}
