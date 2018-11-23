import { Application } from 'express';
import { BlogController } from '../controllers/blog.controller';

export class BlogRouter {

  public blogCtrl: BlogController = new BlogController();

  public attach(app: Application): void {
    app.route('/blog')
    // GET Blog List
    .get(this.blogCtrl.getBlogs)
    // POST Create Blog
    .post(this.blogCtrl.createBlog);


    app.route('/blog/:blogId')
    // GET Blog by Id
    .get(this.blogCtrl.getBlogById)
    // PUT Update Blog by Id
    .post(this.blogCtrl.createBlogEntryById)
    // PUT Update Blog by Id
    .put(this.blogCtrl.updateBlogById)
    // DELETE Blog by Id
    .delete(this.blogCtrl.deleteBlogByID);
  }
}
