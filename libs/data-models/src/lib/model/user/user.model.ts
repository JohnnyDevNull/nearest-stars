import { UserGroupModel } from './user-group.model';
import { UserProfileModel } from './user-profile.model';

export interface UserModel {

  id?: number;
  username?: string;
  email?: string;
  password?: string;
  activated?: boolean;
  activatedAt?: Date;
  locked: boolean;
  lockedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;

  groups?: UserGroupModel[];
  profile?: UserProfileModel;

}
