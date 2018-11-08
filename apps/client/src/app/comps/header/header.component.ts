import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '../../services/state/state-service';

@Component({
  selector: 'nearest-stars-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;

  constructor(
    private stateServ: StateService
  ) {
  }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.stateServ.getIsLoggedIn();
  }

  onSubmit(f: NgForm) {
    console.log(f.value.search);
  }
}
