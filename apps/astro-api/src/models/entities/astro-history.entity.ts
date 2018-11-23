import { AstroHistoryModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const AstroHistoryEntity = new EntitySchema<AstroHistoryModel>({
  name: 'AstroHistory',
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
      target: 'AstroObjects',
      type: 'one-to-one',
      inverseSide: 'history',
      joinColumn: true,
      primary: true
    }
  }
});
