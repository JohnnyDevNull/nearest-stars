import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nearest-stars-admin-users-item',
  templateUrl: './admin-users-item.component.html'
})
export class AdminUsersItemComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public mode: string;
  public id: number;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.mode = this.route.snapshot.params['mode'];
    this.id = this.route.snapshot.params['id'] !== undefined
            ? +this.route.snapshot.params['id']
            : 0;

    this.subs.push(this.route.params.subscribe((params: Params) => {
      this.mode = params['mode'];
      this.id = this.route.snapshot.params['id'] !== undefined
              ? +this.route.snapshot.params['id']
              : 0;
    }));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    console.log(f.value);
  }
}
