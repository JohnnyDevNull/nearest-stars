import { ApiObjectsConfig as Config } from '@nearest-stars/config';
import { ExpressApp, MainRouter } from '@nearest-stars/ep-core';
import { environment } from './environments/environment';

const mainRouter = new MainRouter(environment);

const epApp = new ExpressApp(Config, environment, mainRouter);
epApp.listen();
