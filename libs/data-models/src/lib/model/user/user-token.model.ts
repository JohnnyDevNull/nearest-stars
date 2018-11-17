import { UserModel } from '@nearest-stars/data-models';

export interface UserTokenModel {
  token: string,
  lastPath: String,
  createdAt: Date,
  updatedAt: Date,
  user: UserModel
}
