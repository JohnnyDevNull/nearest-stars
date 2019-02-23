import { UserModel } from '@nearest-stars/schema';
import { EntitySchema } from 'typeorm';

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
      type: Boolean,
      default: false
    },
    activatedAt: {
      type: Date,
      default: null
    },
    locked: {
      type: Boolean,
      default: false
    },
    lockedAt: {
      type: Date,
      default: null
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
      joinTable: { name: 'user_group_map'},
      cascade: true,
      inverseSide: 'users'
    },
    token: {
      target: 'UserToken',
      type: 'one-to-one',
      inverseSide: 'user'
    }
  }
});
