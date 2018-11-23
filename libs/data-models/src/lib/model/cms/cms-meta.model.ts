import { UserModel } from '../user/user.model';

export interface CmsMetaHead {
  id?: Number;
  title?: String;
  subtitle?: String;
  alias?: String;
}

export interface CmsMetaMod {
  published?: Boolean;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  locked?: Boolean;
  lockedAt?: Date;
  deleted?: Boolean;
  deletedAt?: Date;
  author?: UserModel;
}
