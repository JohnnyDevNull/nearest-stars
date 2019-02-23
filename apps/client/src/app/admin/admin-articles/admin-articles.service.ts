import { Injectable } from '@angular/core';
import { BaseRestModel, CmsArticleModel } from '@nearest-stars/schema';
import { tap } from 'rxjs/operators';
import { RestService } from '../../services/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AdminArticlesService {

  private arts: CmsArticleModel[] = [];

  public constructor (
    private restServ: RestService
  ) {
  }

  public fetchArtList() {
    return this.restServ.doGet<CmsArticleModel[]>('api/article', true).pipe(
      tap((res) => {
        this.arts = res.data;
      })
    )
  }

  public getArtList(): CmsArticleModel[] {
    return this.arts.slice();
  }

  public getArtByIndex(i: number): CmsArticleModel | null {
    if (this.arts.length > 0) {
      return this.arts.slice(i, i+1)[0];
    } else {
      return null;
    }
  }

  public updateArt(article: CmsArticleModel) {
    return this.restServ.doPut<BaseRestModel<CmsArticleModel>>('api/article/' + article.id, article, true);
  }

  public createArt(article: CmsArticleModel) {
    return this.restServ.doPost<BaseRestModel<CmsArticleModel>>('api/article', article, true);
  }

  public deleteArt(artId: number) {
    return this.restServ.doDelete<BaseRestModel<any>>('api/article/' + artId, true);
  }
}
