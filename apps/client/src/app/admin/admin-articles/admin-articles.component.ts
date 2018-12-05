import { Component, OnInit } from '@angular/core';
import { CmsArticleModel } from '@nearest-stars/data-models';
import { MsglineService } from '../../comps/msgline/msgline.service';
import { AdminArticlesService } from './admin-articles.service';

@Component({
  selector: 'nearest-stars-admin-articles',
  templateUrl: './admin-articles.component.html'
})
export class AdminArticlesComponent implements OnInit {

  public cats: CmsArticleModel[] = [];

  constructor(
    private admServ: AdminArticlesService,
    private msgServ: MsglineService
  ) {
  }

  public ngOnInit(): void {
    this.load();
  }

  public onDeleteRow(catId: number) {
    this.admServ.deleteArt(catId).subscribe(
      (res) => this.msgServ.showMessageByResult(res),
      (err) => this.msgServ.showMessageByResult(err)
    );
  }

  public onSync(): void {
    this.load();
  }

  private load(): void {
    const subs = this.admServ.fetchArtList().subscribe(() => {
      this.cats = this.admServ.getArtList();
      subs.unsubscribe();
    },
    (err) => this.msgServ.showMessageByResult(err));
  }
}
