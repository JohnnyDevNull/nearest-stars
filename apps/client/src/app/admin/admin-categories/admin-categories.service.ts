import { Injectable } from '@angular/core';
import { BaseRestModel, CmsCategoryModel } from '@nearest-stars/schema';
import { tap } from 'rxjs/operators';
import { RestService } from '../../services/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoriesService {

  private cats: CmsCategoryModel[] = [];

  public constructor (
    private restServ: RestService
  ) {
  }

  public fetchCatsList() {
    return this.restServ.doGet<CmsCategoryModel[]>('api/portal/category', true).pipe(
      tap((res) => {
        this.cats = res.data;
      })
    )
  }

  public getCatList(): CmsCategoryModel[] {
    return this.cats.slice();
  }

  public getCatByIndex(i: number): CmsCategoryModel | null {
    if (this.cats.length > 0) {
      return this.cats.slice(i, i+1)[0];
    } else {
      return null;
    }
  }

  public updateCat(blog: CmsCategoryModel) {
    return this.restServ.doPut<BaseRestModel<CmsCategoryModel>>('api/portal/category/' + blog.id, blog, true);
  }

  public createCat(blog: CmsCategoryModel) {
    return this.restServ.doPost<BaseRestModel<CmsCategoryModel>>('api/portal/category', blog, true);
  }

  public deleteCat(blogId: number) {
    return this.restServ.doDelete<BaseRestModel<any>>('api/portal/category/' + blogId, true);
  }
}
