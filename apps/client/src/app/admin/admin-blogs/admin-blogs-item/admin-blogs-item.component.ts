import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotifyService } from '@client-services/notify/notify.service';
import { CmsBlogModel } from '@nearest-stars/data-models';
import { Subscription } from 'rxjs';
import { AdminBlogsService } from '../admin-blogs.service';

@Component({
  selector: 'nearest-stars-admin-blogs-item',
  templateUrl: './admin-blogs-item.component.html'
})
export class AdminBlogsItemComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public mode: string;
  public index: number | null = null;

  public item: CmsBlogModel | null = null;

  public constructor (
    private route: ActivatedRoute,
    private router: Router,
    private admServ: AdminBlogsService,
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

    const blog: CmsBlogModel = {};
    const {title, subtitle, alias, text, published, locked} = f.value;

    blog.title = title;
    blog.subtitle = subtitle;
    blog.alias = alias;
    blog.text = text;
    blog.published = published;
    blog.locked = locked;

    if (this.mode === 'edit' && this.item.id !== null) {
      blog.id = this.item.id;
      this.admServ.updateBlog(blog).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    } else if (this.mode === 'new' && this.item.id === null) {
      this.admServ.createBlog(blog).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    }
  }

  public onDelete(blogId: number): void {
    this.admServ.deleteBlog(blogId).subscribe(
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
      const item = this.admServ.getBlogByIndex(this.index);

      if (item !== null) {
        this.item = item;
      } else {
        this.router.navigate(['/admin/blogs']);
      }
    }
  }
}
