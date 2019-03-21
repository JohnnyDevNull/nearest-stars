import { ObjectCatalogModel } from './object-catalog.model';
import { ObjectCoordinateModel } from './object-coordinate.model';
import { ObjectHistoryModel } from './object-history.model';
import { ObjectMagnitudeModel } from './object-magnitude.model';
import { ObjectTypeModel } from './object-type.model';
import { ObjectOrbitModel } from './object-orbit.model';
import { ObjectPhysicalInfoModel } from './object-physical-info.model';
import { ObjectSystemModel } from './system/system.model';
import { ObjectVectorModel } from './object-vector.model';

export interface ObjectModel {

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

  objectType?: ObjectTypeModel;
  catalogs?: ObjectCatalogModel;
  coordinates?: ObjectCoordinateModel;
  history?: ObjectHistoryModel;
  magnitudes?: ObjectMagnitudeModel;
  orbits?: ObjectOrbitModel;
  physicalInfo?: ObjectPhysicalInfoModel;
  system?: ObjectSystemModel;
  vectors?: ObjectVectorModel;
}
