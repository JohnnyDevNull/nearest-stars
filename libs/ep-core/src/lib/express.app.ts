import * as bodyParser from 'body-parser';
import * as errorhandler from 'errorhandler';
import * as express from 'express';
import * as morgan from 'morgan';
import { MainRouter } from './routes/index';
import { createConnection, ConnectionOptions } from 'typeorm';

export class ExpressApp {

  public app: express.Application;

  constructor (
    private config,
    private env,
    private router: MainRouter
  ) {
    this.app = express();
    this.configure();
    this.router.attach(this.app);
  }

  private configure(): void {

    if (this.env.production) {
      // only use in development
      // see: https://www.npmjs.com/package/errorhandler
      this.app.use(errorhandler());
    }

    if (this.config.crossOrigin) {
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

  public listen() {
    const PORT = process.env.PORT || this.config.PORT || 3000;

    createConnection((<ConnectionOptions>this.config.DBConf))
    .then(async connection => {
      this.app.listen(PORT, err => {
        if (err) {
          console.error(err);
        }
        console.log(`Listening at http://localhost:${PORT}`);
      });
    })
    .catch(error => console.log('TypeORM connection error: ', error));
  }
}
