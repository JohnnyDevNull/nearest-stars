import { CmsBlogModel } from './cms-blog.model';
import { CmsArticleModel } from './cms-article.model';
import { CmsCategoryTypeModel } from './cms-category-type.model';
import { CmsMetaHead, CmsMetaMod } from './cms-meta.model';
import { CmsTagModel } from './cms-tag.model';
import { CmsWeblinkModel } from './cms-weblink.model';

export interface CmsCategoryModel extends CmsMetaHead, CmsMetaMod {
  text?: string;
  type?: CmsCategoryTypeModel;
  blog?: CmsBlogModel;
  articles?: CmsArticleModel[];
  tags?: CmsTagModel[];
  weblinks?: CmsWeblinkModel[];
}
