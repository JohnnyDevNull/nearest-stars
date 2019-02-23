import { ApiAuthConfig as Config } from '@nearest-stars/config';
import { ExpressApp, MainRouter } from '@nearest-stars/ep-core';
import { environment } from './environments/environment';
import { TokenRouter } from './routes/token.router';
import { UserGroupRouter } from './routes/user-group.router';
import { UserRouter } from './routes/user.router';

const mainRouter = new MainRouter(environment);
mainRouter.addRouter(new TokenRouter())
mainRouter.addRouter(new UserGroupRouter());
mainRouter.addRouter(new UserRouter());

const epApp = new ExpressApp(Config, environment, mainRouter);
epApp.listen();
