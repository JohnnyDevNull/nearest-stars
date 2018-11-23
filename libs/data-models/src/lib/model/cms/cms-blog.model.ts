import { CmsCategoryModel } from './cms-category.model';
import { CmsTagModel } from '@nearest-stars/data-models';
import { CmsMetaHead, CmsMetaMod } from './cms-meta.model';

export interface CmsBlogModel extends CmsMetaHead, CmsMetaMod {
  text?: string;
  categories?: CmsCategoryModel[];
  tags?: CmsTagModel[];
}
