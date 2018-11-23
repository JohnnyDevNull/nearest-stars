import { CmsMetaHead, CmsMetaMod } from './cms-meta.model';
import { CmsCategoryModel } from './cms-category.model';
import { CmsTagModel } from './cms-tag.model';

export interface CmsWeblinkModel extends CmsMetaHead, CmsMetaMod {
  text?: string;
  url?: string;
  category?: CmsCategoryModel;
  tags?: CmsTagModel[];
}
