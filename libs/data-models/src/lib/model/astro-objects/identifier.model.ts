import { EntitySchema } from 'typeorm';
import { CatalogsModel } from './catalogs.model';
import { CoordinatesModel } from './coordinates.model';
import { HistoryModel } from './history.model';
import { MagnitudesModel } from './magnitudes.model';
import { OrbitsModel } from './orbits.model';
import { PhysicalInfoModel } from './physical-info.model';
import { SystemModel } from './system.model';
import { VectorsModel } from './vectors.model';

export interface IdentifierModel {

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
  createdAt: Date;

  /**
   * The timestamp on which the object was updated the last time in the database
   */
  updatedAt: Date;

  catalogs: CatalogsModel;
  coordinates: CoordinatesModel;
  history: HistoryModel;
  magnitudes: MagnitudesModel;
  orbits: OrbitsModel;
  physicalInfo: PhysicalInfoModel;
  system: SystemModel;
  vectors: VectorsModel;
}

export const IdentifierEntity = new EntitySchema<IdentifierModel>({
  name: 'Identifier',
  columns: {
    id: {
      type: Number,
      width: 20,
      unsigned: true,
      primary: true,
      generated: true
    },
    name: {
      type: String,
      length: 40,
    },
    hierarchy: {
      type: String,
      length: 40
    }
  },
  relations: {
    catalogs: {
      target: 'Catalogs',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    coordinates: {
      target: 'Coordinates',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    history: {
      target: 'History',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    magnitudes: {
      target: 'Magnitudes',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    orbits: {
      target: 'Orbits',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    physicalInfo: {
      target: 'PhysicalInfo',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    system: {
      target: 'System',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    vectors: {
      target: 'Vectors',
      type: 'one-to-one',
      inverseSide: 'Identifier'
    }
  }
});
