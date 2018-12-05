import { Component, OnInit } from '@angular/core';
import { CmsCategoryModel } from '@nearest-stars/data-models';
import { MsglineService } from '../../comps/msgline/msgline.service';
import { AdminCategoriesService } from './admin-categories.service';

@Component({
  selector: 'nearest-stars-admin-categories',
  templateUrl: './admin-categories.component.html'
})
export class AdminCategoriesComponent implements OnInit {

  public cats: CmsCategoryModel[] = [];

  constructor(
    private admServ: AdminCategoriesService,
    private msgServ: MsglineService
  ) {
  }

  public ngOnInit(): void {
    this.load();
  }

  public onDeleteRow(catId: number) {
    this.admServ.deleteCat(catId).subscribe(
      (res) => this.msgServ.showMessageByResult(res),
      (err) => this.msgServ.showMessageByResult(err)
    );
  }

  public onSync(): void {
    this.load();
  }

  private load(): void {
    const subs = this.admServ.fetchCatsList().subscribe(() => {
      this.cats = this.admServ.getCatList();
      subs.unsubscribe();
    },
    (err) => this.msgServ.showMessageByResult(err));
  }
}
