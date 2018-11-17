import { UserTokenModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const UserEntity = new EntitySchema<UserTokenModel>({
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
  }
});
