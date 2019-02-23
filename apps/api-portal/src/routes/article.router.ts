import { Application } from 'express';
import { ArticleController } from '../controllers/article.controller';

export class ArticleRouter {

  public artCtrl: ArticleController = new ArticleController();

  public attach(app: Application): void {
    app.route('/article')
    // GET Article List
    .get(this.artCtrl.getArts)
    // POST Create Article
    .post(this.artCtrl.createArt);

    app.route('/article/:artId')
    // GET Article by Id
    .get(this.artCtrl.getArtById)
    // PUT Update Article by Id
    .put(this.artCtrl.updateArtById)
    // DELETE Article by Id
    .delete(this.artCtrl.deleteArtByID);
  }
}
