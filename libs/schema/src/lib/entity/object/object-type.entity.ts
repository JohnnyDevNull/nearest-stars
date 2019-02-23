import { ObjectTypeModel } from '../../model/index';
import { EntitySchema } from 'typeorm';

export const ObjectTypeEntity = new EntitySchema<ObjectTypeModel>({
  name: 'ObjectType',
  columns: {
    id: {
      type: Number,
      width: 10,
      unsigned: true,
      primary: true,
      generated: true
    },
    name: {
      type: String,
      length: 40,
    },
    descr: {
      type: String,
      length: 4000
    }
  },
  relations: {
    objects: {
      target: 'Object',
      type: 'one-to-many',
      inverseSide: 'objectType'
    }
  }
});
