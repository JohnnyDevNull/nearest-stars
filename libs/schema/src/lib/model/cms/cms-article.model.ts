import { CmsCategoryModel } from './cms-category.model';
import { CmsMetaHead, CmsMetaMod } from './cms-meta.model';
import { CmsTagModel } from './cms-tag.model';

export interface CmsArticleModel extends CmsMetaHead, CmsMetaMod {
  text?: string;
  category?: CmsCategoryModel;
  tags?: CmsTagModel[];
}
