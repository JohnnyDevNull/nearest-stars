import { UserModel } from './user.model';

export interface UserGroupModel {
  id?: number;
  name?: string;
  type?: string;
  createdAt?: Date;
  updatedAt?: Date;
  activated?: boolean;
  activatedAt?: Date;
  users?: UserModel[];
}
