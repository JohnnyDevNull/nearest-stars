import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CmsArticleModel } from '@nearest-stars/data-models';
import { Subscription } from 'rxjs';
import { NotifyService } from '../../../services/notify/notify.service';
import { AdminArticlesService } from '../admin-articles.service';

@Component({
  selector: 'nearest-stars-admin-articles-item',
  templateUrl: './admin-articles-item.component.html'
})
export class AdminArticlesItemComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public mode: string;
  public index: number | null = null;

  public item: CmsArticleModel | null = null;

  public constructor (
    private route: ActivatedRoute,
    private router: Router,
    private admServ: AdminArticlesService,
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

    const art: CmsArticleModel = {};
    const {title, subtitle, alias, text, published, locked} = f.value;

    art.title = title;
    art.subtitle = subtitle;
    art.alias = alias;
    art.text = text;
    art.published = published;
    art.locked = locked;

    if (this.mode === 'edit' && this.item.id !== null) {
      art.id = this.item.id;
      this.admServ.updateArt(art).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    } else if (this.mode === 'new' && this.item.id === null) {
      this.admServ.createArt(art).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    }
  }

  public onDelete(artId: number): void {
    this.admServ.deleteArt(artId).subscribe(
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
      const item = this.admServ.getArtByIndex(this.index);

      if (item !== null) {
        this.item = item;
      } else {
        this.router.navigate(['/admin/articles']);
      }
    }
  }
}
