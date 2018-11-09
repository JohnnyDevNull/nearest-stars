import { IdentifierModel } from './identifier.model';
import { EntitySchema } from 'typeorm';

export interface SystemModel {

  identifier: IdentifierModel;

  /**
   * Star system the object belongs to.
   * Proxima Centauri would be in the system Alpha Centauri
   */
  system?: string;

  diskFlag: boolean;
  planetsFlag: boolean;
  nDisks: number;
  nPlanetsConfirmed: number;
  nPlanetsUnconfirmed: number;
  nPlanetsDubious: number;
  nPlanetsPlausible: number;
  nPlanetsDisproven: number;
}

export const SystemEntity = new EntitySchema<SystemModel>({
  name: 'System',
  columns: {
    diskFlag: {
      type: Boolean
    },
    planetsFlag: {
      type: Boolean
    },
    nDisks: {
      type: Number,
      width: 5,
      unsigned: true
    },
    nPlanetsConfirmed: {
      type: Number,
      width: 5,
      unsigned: true
    },
    nPlanetsUnconfirmed: {
      type: Number,
      width: 5,
      unsigned: true
    },
    nPlanetsDubious: {
      type: Number,
      width: 5,
      unsigned: true
    },
    nPlanetsPlausible: {
      type: Number,
      width: 5,
      unsigned: true
    },
    nPlanetsDisproven: {
      type: Number,
      width: 5,
      unsigned: true
    }
  },
  relations: {
    identifier: {
      target: 'Identifier',
      type: 'one-to-one',
      inverseSide: 'system',
      joinColumn: true
    }
  }
});
