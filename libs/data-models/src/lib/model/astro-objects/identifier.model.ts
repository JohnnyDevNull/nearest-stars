export interface IdentifierModel {

  /**
   * The database internal identifier:
   * Possible Format: [A-Z0-9]
   */
  id?: string;

  /**
   * The named identifier of the object.
   * Primary name by which the object is known.
   */
  name?: string;

  /**
   * Star system the object belongs to.
   * Proxima Centauri would be in the system Alpha Centauri
   */
  system?: string;

  /**
   * Distribution of stars in the system, if multiple.
   * Example, for quintuple system V1054 Ophiuchi
   * ((A(BC))D)E where stars BC orbit each other
   * and stars BC are collectively orbited by star A
   * Stars A,B, and C are orbited by star D
   * and stars ABC and D are all orbited by star E.
   */
  hierarchy?: string;

}
