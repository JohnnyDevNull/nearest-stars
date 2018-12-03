import { Injectable } from '@angular/core';
import { BaseRestModel, CmsBlogModel } from '@nearest-stars/data-models';
import { tap } from 'rxjs/operators';
import { RestService } from '../../services/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogsService {

  private blogs: CmsBlogModel[] = [];

  public constructor (
    private restServ: RestService
  ) {
  }

  public fetchBlogsList() {
    return this.restServ.doGet<CmsBlogModel[]>('api/blog', true).pipe(
      tap((res) => {
        this.blogs = res.data;
      })
    )
  }

  public getBlogList(): CmsBlogModel[] {
    return this.blogs.slice();
  }

  public getBlogByIndex(i: number): CmsBlogModel | null {
    if (this.blogs.length > 0) {
      return this.blogs.slice(i, i+1)[0];
    } else {
      return null;
    }
  }

  public updateBlog(blog: CmsBlogModel) {
    return this.restServ.doPut<BaseRestModel<CmsBlogModel>>('api/blog/' + blog.id, blog, true);
  }

  public createBlog(blog: CmsBlogModel) {
    return this.restServ.doPost<BaseRestModel<CmsBlogModel>>('api/blog', blog, true);
  }

  public deleteBlog(blogId: number) {
    return this.restServ.doDelete<BaseRestModel<any>>('api/blog/' + blogId, true);
  }
}
