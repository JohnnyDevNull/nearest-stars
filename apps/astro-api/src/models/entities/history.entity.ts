import { HistoryModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const HistoryEntity = new EntitySchema<HistoryModel>({
  name: 'History',
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
    identifier: {
      target: 'Identifier',
      type: 'one-to-one',
      inverseSide: 'history',
      joinColumn: true
    }
  }
});
