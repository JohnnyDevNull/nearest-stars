import { UserTokenModel } from '@nearest-stars/schema';
import { EntitySchema } from 'typeorm';

export const UserTokenEntity = new EntitySchema<UserTokenModel>({
  name: 'UserToken',
  columns: {
    token: {
      type: String,
      length: 80
    },
    lastPath: {
      type: String,
      length: 80
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
    user: {
      type: 'one-to-one',
      target: 'User',
      joinColumn: true,
      inverseSide: 'token',
      primary: true
    }
  }
});
