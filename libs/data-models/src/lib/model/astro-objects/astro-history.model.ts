import { AstroIdentifierModel } from './astro-identifier.model';

export interface AstroHistoryModel {

  identifier: AstroIdentifierModel;

  /**
   * The timestamp on which the object was first spotted
   */
  discAt: Date;

  /**
   * The Author wich spotted the object.
   */
  discAuthor: string;

}
