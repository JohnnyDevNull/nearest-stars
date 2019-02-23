import { ObjectHistoryModel } from '../../model/index';
import { EntitySchema } from 'typeorm';

export const ObjectHistoryEntity = new EntitySchema<ObjectHistoryModel>({
  name: 'ObjectHistory',
  columns: {
    discAt: {
      type: Date
    },
    discAuthor: {
      type: String,
      length: 40,
    },
  },
  relations: {
    object: {
      target: 'Object',
      type: 'one-to-one',
      inverseSide: 'history',
      joinColumn: true,
      primary: true
    }
  }
});
