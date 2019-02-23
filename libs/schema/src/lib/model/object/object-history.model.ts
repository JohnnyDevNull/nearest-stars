import { ObjectModel } from './object.model';

export interface ObjectHistoryModel {

  object?: ObjectModel;

  /**
   * The timestamp on which the object was first spotted
   */
  discAt?: Date;

  /**
   * The Author wich spotted the object.
   */
  discAuthor?: string;

}
