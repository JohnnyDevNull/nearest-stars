import { UserModel } from './user.model';

export interface UserTokenModel {
  token: string,
  lastPath: String,
  createdAt: Date,
  updatedAt: Date,
  user: UserModel
}
