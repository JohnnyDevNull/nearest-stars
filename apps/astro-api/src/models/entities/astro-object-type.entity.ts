import { AstroObjectTypeModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const AstroObjectTypeEntity = new EntitySchema<AstroObjectTypeModel>({
  name: 'AstroObjectType',
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
      target: 'AstroObject',
      type: 'one-to-many',
      inverseSide: 'objectType'
    }
  }
});
