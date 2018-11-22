import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nearest-stars-admin-articles-item',
  templateUrl: './admin-articles-item.component.html'
})
export class AdminArticlesItemComponent implements OnInit, OnDestroy {

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

}
