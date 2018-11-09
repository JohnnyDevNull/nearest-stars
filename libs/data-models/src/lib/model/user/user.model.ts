import { UserGroupModel } from './user-group.model';
import { UserProfileModel } from './user-profile.model';
import { EntitySchema } from 'typeorm';

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

  groups?: UserGroupModel[];
  profile?: UserProfileModel;

}

export const UserEntity = new EntitySchema<UserModel>({
  name: 'User',
  columns: {
    id: {
      type: Number,
      width: 10,
      unsigned: true,
      primary: true,
      generated: true
    },
    username: {
      type: String,
      length: 20
    },
    email: {
      type: String,
      length: 20
    },
    password: {
      type: String,
      length: 80
    },
    activated: {
      type: Boolean
    },
    activatedAt: {
      type: Date
    },
    banned: {
      type: Boolean
    },
    bannedAt: {
      type: Date
    },
    createdAt: {
      type: Date,
      createDate: true
    },
    updatedAt: {
      type: Date,
      updateDate: true
    }
  },
  relations: {
    profile: {
      target: 'UserProfile',
      type: 'one-to-one',
      inverseSide: 'user'
    },
    groups: {
      target: 'UserGroup',
      type: 'many-to-many',
      joinTable: { name: 'user_group_map' },
      cascade: true,
      inverseSide: 'users'
    }
  }
});
