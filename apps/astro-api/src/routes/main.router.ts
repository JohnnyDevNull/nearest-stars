import { IndexController } from '../controllers/index.controller';
import { environment } from '../environments/environment';
import { BlogRouter } from './blog.router';
import { TokenRouter } from './token.router';
import { UserRouter } from './user.router';
import { UserGroupRouter } from './user-group.router';

export class MainRouter {

  public indexCtrl: IndexController = new IndexController();

  public attach(app): void {
    this.addRoutes(app);
    this.addErrorHandler(app);
  }

  private addRoutes(app) {
    app.route('/').get(this.indexCtrl.getIndex);

    const usersRouter = new UserRouter();
          usersRouter.attach(app);

    const userGroupRouter = new UserGroupRouter();
          userGroupRouter.attach(app);

    const tokenRouter = new TokenRouter();
          tokenRouter.attach(app);

    const blogRouter = new BlogRouter();
          blogRouter.attach(app);
  }

  private addErrorHandler(app) {
    // development error handler
    if (environment.production) {
      app.use(function(err, req, res, next) {
        console.log(err.stack);
        res.status(err.status || 500);
        res.json({'meta': {
          code: err.status,
          error: true,
          message: err.message
        }});
      });
    }

    // production error handler
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({'meta': {
        code: err.status,
        error: true,
        message: err.message
      }});
    });

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      const err = new Error('Not Found');
      (<any>err).status = 404;
      next(err);
    });
  }
}
