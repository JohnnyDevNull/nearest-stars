import { AstroCatalogsModel } from './astro-catalogs.model';
import { AstroCoordinatesModel } from './astro-coordinates.model';
import { AstroHistoryModel } from './astro-history.model';
import { AstroMagnitudesModel } from './astro-magnitudes.model';
import { AstroOrbitsModel } from './astro-orbits.model';
import { AstroPhysicalInfoModel } from './astro-physical-info.model';
import { AstroSystemModel } from './astro-system.model';
import { AstroVectorsModel } from './astro-vectors.model';

export interface AstroIdentifierModel {

  /**
   * The database internal identifier
   */
  id?: number;

  /**
   * Identifies the objects type itself.
   * Like the class of the star, planet or black whole.
   */
  objectType?: string;

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
  createdAt: Date;

  /**
   * The timestamp on which the object was updated the last time in the database
   */
  updatedAt: Date;

  catalogs: AstroCatalogsModel;
  coordinates: AstroCoordinatesModel;
  history: AstroHistoryModel;
  magnitudes: AstroMagnitudesModel;
  orbits: AstroOrbitsModel;
  physicalInfo: AstroPhysicalInfoModel;
  system: AstroSystemModel;
  vectors: AstroVectorsModel;
}

