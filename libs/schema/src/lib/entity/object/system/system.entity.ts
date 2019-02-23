import { SystemModel } from '../../../model/index';
import { EntitySchema } from 'typeorm';

export const ObjectSystemEntity = new EntitySchema<SystemModel>({
  name: 'ObjectSystem',
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
    systemType: {
      target: 'ObjectSystemType',
      type: 'one-to-many',
      joinColumn: true
    },
    objects: {
      target: 'Object',
      type: 'one-to-many',
      inverseSide: 'system',
    }
  }
});
