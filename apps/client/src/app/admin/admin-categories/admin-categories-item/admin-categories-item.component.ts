import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotifyService } from '@client-services/notify/notify.service';
import { CmsCategoryModel } from '@nearest-stars/schema';
import { Subscription } from 'rxjs';
import { AdminCategoriesService } from '../admin-categories.service';

@Component({
  selector: 'nearest-stars-admin-categories-item',
  templateUrl: './admin-categories-item.component.html'
})
export class AdminCategoriesItemComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public mode: string;
  public index: number | null = null;

  public item: CmsCategoryModel | null = null;

  public constructor (
    private route: ActivatedRoute,
    private router: Router,
    private admServ: AdminCategoriesService,
    private msgServ: NotifyService
  ) {
  }

  public ngOnInit(): void {
    this.mode = this.route.snapshot.params['mode'];
    this.index = this.route.snapshot.params['index'] !== undefined
            ? +this.route.snapshot.params['index']
            : null;
    this.fetchItem();

    this.subs.push(this.route.params.subscribe((params: Params) => {
      this.mode = params['mode'];
      this.index = this.route.snapshot.params['index'] !== undefined
              ? +this.route.snapshot.params['index']
              : 0;
      this.fetchItem();
    }));
  }

  public ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  public onSubmit(f: NgForm): void {
    if (!f.valid) {
      return;
    }

    const cat: CmsCategoryModel = {};
    const {title, subtitle, alias, text, published, locked} = f.value;

    cat.title = title;
    cat.subtitle = subtitle;
    cat.alias = alias;
    cat.text = text;
    cat.published = published;
    cat.locked = locked;

    if (this.mode === 'edit' && this.item.id !== null) {
      cat.id = this.item.id;
      this.admServ.updateCat(cat).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    } else if (this.mode === 'new' && this.item.id === null) {
      this.admServ.createCat(cat).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    }
  }

  public onDelete(catId: number): void {
    this.admServ.deleteCat(catId).subscribe(
      (res) => this.msgServ.showMessageByResult(res),
      (err) => this.msgServ.showMessageByResult(err)
    );
  }

  private fetchItem(): void {
    this.item = {
      id: null,
      title: '',
      subtitle: '',
      alias: '',
      published: false,
      locked: false
    };

    if (this.mode === 'edit' && this.index !== null) {
      const item = this.admServ.getCatByIndex(this.index);

      if (item !== null) {
        this.item = item;
      } else {
        this.router.navigate(['/admin/categories']);
      }
    }
  }
}
