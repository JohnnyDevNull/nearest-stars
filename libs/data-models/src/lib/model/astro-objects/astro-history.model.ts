import { AstroObjectModel } from './astro-object.model';

export interface AstroHistoryModel {

  object?: AstroObjectModel;

  /**
   * The timestamp on which the object was first spotted
   */
  discAt?: Date;

  /**
   * The Author wich spotted the object.
   */
  discAuthor?: string;

}