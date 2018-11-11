import { UserModel } from '@nearest-stars/data-models';
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
      type: Boolean
    },
    activatedAt: {
      type: Date
    },
    locked: {
      type: Boolean
    },
    lockedAt: {
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
