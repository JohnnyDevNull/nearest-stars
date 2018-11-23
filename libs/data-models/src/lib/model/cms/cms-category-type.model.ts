import { CmsCategoryModel } from './cms-category.model';
import { CmsMetaHead, CmsMetaMod } from './cms-meta.model';

export interface CmsCategoryTypeModel extends CmsMetaHead, CmsMetaMod {
  text?: String;
  categories?: CmsCategoryModel[];
}
