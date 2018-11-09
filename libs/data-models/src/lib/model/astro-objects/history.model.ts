import { EntitySchema } from 'typeorm';
import { IdentifierModel } from './identifier.model';

export interface HistoryModel {

  identifier: IdentifierModel;

  /**
   * The timestamp on which the object was first spotted
   */
  discAt: Date;

  /**
   * The Author wich spotted the object.
   */
  discAuthor: string;

}

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
