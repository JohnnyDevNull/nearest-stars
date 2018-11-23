import { AstroSystemModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const AstroSystemEntity = new EntitySchema<AstroSystemModel>({
  name: 'AstroSystem',
  columns: {
    id: {
      type: Number,
      width: 20,
      unsigned: true,
      primary: true,
      generated: true
    },
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
    objects: {
      target: 'AstroObject',
      type: 'one-to-many',
      inverseSide: 'system',
    }
  }
});
