import { UserModel } from '../user/user.model';

export interface CmsMetaHead {
  id?: number;
  title?: string;
  subtitle?: string;
  alias?: string;
}

export interface CmsMetaMod {
  published?: boolean;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  locked?: boolean;
  lockedAt?: Date;
  deleted?: boolean;
  deletedAt?: Date;
  author?: UserModel;
}
