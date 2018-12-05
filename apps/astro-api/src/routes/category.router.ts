import { Application } from 'express';
import { CategoryController } from '../controllers/category.controller';

export class CategoryRouter {

  public catCtrl: CategoryController = new CategoryController();

  public attach(app: Application): void {
    app.route('/category')
    // GET Blog List
    .get(this.catCtrl.getCats)
    // POST Create Blog
    .post(this.catCtrl.createCat);

    app.route('/category/:catId')
    // GET Blog by Id
    .get(this.catCtrl.getCatById)
    // PUT Update Blog by Id
    .put(this.catCtrl.updateCatById)
    // DELETE Blog by Id
    .delete(this.catCtrl.deleteCatByID);
  }
}
