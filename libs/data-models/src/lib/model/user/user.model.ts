import { UserGroupModel } from './user-group.model';
import { UserProfileModel } from './user-profile.model';

export interface UserModel {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  activated?: boolean;
  activatedAt?: Date;
  banned?: boolean;
  bannedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  userGroup?: UserGroupModel;
  userProfile?: UserProfileModel;
}
