import { AstroObjectModel } from './astro-object.model';

export interface AstroCoordinateModel {

  object?: AstroObjectModel;

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