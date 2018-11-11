import * as bodyParser from 'body-parser';
import * as errorhandler from 'errorhandler';
import * as express from 'express';
import * as morgan from 'morgan';
import { config } from './config';
import { environment } from './environments/environment';
import { MainRouter } from './routes/main-router';

class App {

  public app: express.Application;
  public router: MainRouter = new MainRouter();

  constructor() {
    this.app = express();
    this.config();
    this.router.attach(this.app);
  }

  private config(): void {

    if (environment.production) {
      // only use in development
      // see: https://www.npmjs.com/package/errorhandler
      this.app.use(errorhandler());
    }

    if (config.crossOrigin) {
      this.app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
        next();
      });
    }

    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // log all request in the Apache combined format
    // see: https://www.npmjs.com/package/morgan
    this.app.use(morgan('combined'));

    // sanitizing user input
    // see: https://www.npmjs.com/package/sanitize
    this.app.use(require('sanitize').middleware);
  }

}

export default new App().app;
