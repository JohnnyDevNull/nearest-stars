import { CmsArticleModel } from './cms-article.model';
import { CmsCategoryModel } from './cms-category.model';
import { CmsMetaHead, CmsMetaMod } from './cms-meta.model';
import { CmsWeblinkModel } from './cms-weblink.model';

export interface CmsTagModel extends CmsMetaHead, CmsMetaMod {
  text?: String;
  articles?: CmsArticleModel[];
  categories?: CmsCategoryModel[];
  weblinks?: CmsWeblinkModel[];
}
