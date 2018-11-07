export interface CoordinatesModel {

  /**
   * The identifier.id the data belongs to.
   */
  objectId?: number;

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
}
