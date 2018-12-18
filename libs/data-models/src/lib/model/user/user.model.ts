import { UserGroupModel } from './user-group.model';
import { UserProfileModel } from './user-profile.model';
import { UserTokenModel } from './user-token.model';

export interface UserModel {

  id?: number;
  username?: string;
  email?: string;
  password?: string;
  activated?: boolean;
  activatedAt?: Date;
  locked?: boolean;
  lockedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;

  groupIdArr?: number[];

  groups?: UserGroupModel[];
  profile?: UserProfileModel;
  token?: UserTokenModel;

}
