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
