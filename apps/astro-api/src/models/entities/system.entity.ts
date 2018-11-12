import { SystemModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

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