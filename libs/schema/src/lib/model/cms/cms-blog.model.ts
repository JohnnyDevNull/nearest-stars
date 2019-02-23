import { CmsCategoryModel } from './cms-category.model';
import { CmsMetaHead, CmsMetaMod } from './cms-meta.model';
import { CmsTagModel } from './cms-tag.model';

export interface CmsBlogModel extends CmsMetaHead, CmsMetaMod {
  text?: string;
  categories?: CmsCategoryModel[];
  tags?: CmsTagModel[];
}
