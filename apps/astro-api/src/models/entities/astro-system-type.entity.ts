import { AstroSystemTypeModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const AstroSystemTypeEntity = new EntitySchema<AstroSystemTypeModel>({
  name: 'AstroSystemType',
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
      target: 'AstroSystem',
      type: 'one-to-many',
      inverseSide: 'systemType',
    }
  }
});
