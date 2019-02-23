import { SystemTypeModel } from '../../../model/index';
import { EntitySchema } from 'typeorm';

export const ObjectSystemTypeEntity = new EntitySchema<SystemTypeModel>({
  name: 'ObjectSystemType',
  columns: {
    id: {
      type: Number,
      width: 20,
      unsigned: true,
      primary: true,
      generated: true
    },
    name: {
      type: String,
      length: 40
    },
    descr: {
      type: String,
      length: 4000
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
    systems: {
      target: 'ObjectSystem',
      type: 'one-to-many',
      inverseSide: 'systemType',
    }
  }
});
