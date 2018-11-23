import { AstroCatalogModel } from './astro-catalog.model';
import { AstroCoordinateModel } from './astro-coordinate.model';
import { AstroHistoryModel } from './astro-history.model';
import { AstroMagnitudeModel } from './astro-magnitude.model';
import { AstroObjectTypeModel } from './astro-object-type.model';
import { AstroOrbitModel } from './astro-orbit.model';
import { AstroPhysicalInfoModel } from './astro-physical-info.model';
import { AstroSystemModel } from './astro-system.model';
import { AstroVectorModel } from './astro-vector.model';

export interface AstroObjectModel {

  /**
   * The database internal identifier
   */
  id?: number;

  /**
   * The named identifier of the object.
   * Primary name by which the object is known.
   */
  name?: string;

  /**
   * Distribution of stars in the system, if multiple.
   * Example, for quintuple system V1054 Ophiuchi
   * ((A(BC))D)E where stars BC orbit each other
   * and stars BC are collectively orbited by star A
   * Stars A,B, and C are orbited by star D
   * and stars ABC and D are all orbited by star E.
   */
  hierarchy?: string;

  /**
   * The timestamp on which the object was created in the database
   */
  createdAt?: Date;

  /**
   * The timestamp on which the object was updated the last time in the database
   */
  updatedAt?: Date;

  objectType?: AstroObjectTypeModel;
  catalogs?: AstroCatalogModel;
  coordinates?: AstroCoordinateModel;
  history?: AstroHistoryModel;
  magnitudes?: AstroMagnitudeModel;
  orbits?: AstroOrbitModel;
  physicalInfo?: AstroPhysicalInfoModel;
  system?: AstroSystemModel;
  vectors?: AstroVectorModel;
}
