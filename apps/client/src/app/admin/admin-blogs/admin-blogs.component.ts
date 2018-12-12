import { Component, OnInit } from '@angular/core';
import { CmsBlogModel } from '@nearest-stars/data-models';
import { NotifyService } from '../../services/notify/notify.service';
import { AdminBlogsService } from './admin-blogs.service';

@Component({
  selector: 'nearest-stars-admin-blogs',
  templateUrl: './admin-blogs.component.html'
})
export class AdminBlogsComponent implements OnInit {

  public blogs: CmsBlogModel[] = [];

  constructor(
    private admServ: AdminBlogsService,
    private msgServ: NotifyService
  ) {
  }

  public ngOnInit(): void {
    this.load();
  }

  public onDeleteRow(blogId: number) {
    this.admServ.deleteBlog(blogId).subscribe(
      (res) => this.msgServ.showMessageByResult(res),
      (err) => this.msgServ.showMessageByResult(err)
    );
  }

  public onSync(): void {
    this.load();
  }

  private load(): void {
    const subs = this.admServ.fetchBlogsList().subscribe(() => {
      this.blogs = this.admServ.getBlogList();
      subs.unsubscribe();
    },
    (err) => this.msgServ.showMessageByResult(err));
  }
}
