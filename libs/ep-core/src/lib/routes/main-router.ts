import { Application } from 'express';
import { IndexController } from '../controllers/index';
import { RouterIface } from '../types/router.iface';

export class MainRouter implements RouterIface {

  private routers: RouterIface[] = [];
  public indexCtrl: IndexController = new IndexController();

  public constructor(
    private env
  ) {
  }

  public addRouter(router: RouterIface) {
    this.routers.push(router);
  }

  public attach(app: Application): void {
    this.addRoutes(app);
    this.addErrorHandler(app);
  }

  private addRoutes(app) {
    app.route('/').get(this.indexCtrl.getIndex);
    this.routers.forEach(router => router.attach(app));
  }

  private addErrorHandler(app) {
    // catch 404 and forward to error handler
    // app.use(function(req, res, next) {
    //   const err = new Error('Not Found');
    //   (<any>err).status = 404;
    //   next(err);
    // });

    // development error handler
    if (this.env.production) {
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
  }
}
