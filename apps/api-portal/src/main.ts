import { ApiPortalConfig as Config } from '@nearest-stars/config';
import { ExpressApp, MainRouter } from '@nearest-stars/ep-core';
import { environment } from './environments/environment';
import { ArticleRouter } from './routes/article.router';
import { BlogRouter } from './routes/blog.router';
import { CategoryRouter } from './routes/category.router';

const mainRouter = new MainRouter(environment);
mainRouter.addRouter(new ArticleRouter());
mainRouter.addRouter(new BlogRouter());
mainRouter.addRouter(new CategoryRouter());

const epApp = new ExpressApp(Config, environment, mainRouter);
epApp.listen();
