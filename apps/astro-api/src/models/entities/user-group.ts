import { UserGroupModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const UserGroupEntity = new EntitySchema<UserGroupModel>({
  name: 'UserGroup',
  columns: {
    id: {
      type: Number,
      width: 3,
      unsigned: true,
      primary: true,
      generated: true
    },
    name: {
      type: String,
      length: 20
    },
    type: {
      type: String,
      length: 20
    },
    createdAt: {
      type: Date,
      createDate: true
    },
    updatedAt: {
      type: Date,
      updateDate: true
    },
    activated: {
      type: Boolean,
    },
    activatedAt: {
      type: Date
    }
  },
  relations: {
    users: {
      target: 'User',
      type: 'many-to-many',
      inverseSide: 'groups'
    }
  }
});
