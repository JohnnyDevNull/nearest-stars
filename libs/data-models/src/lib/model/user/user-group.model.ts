import { EntitySchema } from 'typeorm';
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
