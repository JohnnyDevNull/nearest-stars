import { EntitySchema } from 'typeorm';
import { IdentifierModel } from './identifier.model';

export interface CoordinatesModel {

  identifier: IdentifierModel;

  /**
   * equatorial coordinates of the star
   *
   * unit/format: degrees
   */
  ra?: number;

  /**
   * error in the previous positions
   *
   * unit/format: arcsec
   */
  raErr?: number;

  /**
   * equatorial coordinates of the star
   *
   * unit/format: degrees
   */
  dec?: number;

  /**
   * error in the previous positions
   *
   * unit/format: arcsec
   */
  decErr?: number;

  /**
   * year of the location
   */
  epoch?: number;

}

export const CoordinatesEntity = new EntitySchema<CoordinatesModel>({
  name: 'Coordinates',
  columns: {
    ra: {
      type: Number,
      width: 10
    },
    raErr: {
      type: Number,
      width: 10
    },
    dec: {
      type: Number,
      width: 10
    },
    decErr: {
      type: Number,
      width: 10
    },
    epoch: {
      type: Number,
      width: 10
    }
  },
  relations: {
    identifier: {
      target: 'Identifier',
      type: 'one-to-one',
      inverseSide: 'coordinates',
      joinColumn: true
    }
  }
});
