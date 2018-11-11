import { OrbitsModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const OrbitsEntity = new EntitySchema<OrbitsModel>({
  name: 'Orbits',
  columns: {
    comp1: {
      type: String,
      length: 10
    },
    comp2: {
      type: String,
      length: 10
    },
    a: {
      type: Number,
      width: 5
    },
    aErrplus: {
      type: Number,
      width: 5
    },
    aErrminus: {
      type: Number,
      width: 5
    },
    e: {
      type: Number,
      width: 5
    },
    eErrplus: {
      type: Number,
      width: 5
    },
    eErrminus: {
      type: Number,
      width: 5
    },
    i: {
      type: Number,
      width: 5
    },
    iErrplus: {
      type: Number,
      width: 5
    },
    iErrminus: {
      type: Number,
      width: 5
    },
    node: {
      type: Number,
      width: 5
    },
    nodeErrplus: {
      type: Number,
      width: 5
    },
    nodeErrminus: {
      type: Number,
      width: 5
    },
    peri: {
      type: Number,
      width: 5
    },
    periErrplus: {
      type: Number,
      width: 5
    },
    periErrminus: {
      type: Number,
      width: 5
    },
    argPeri: {
      type: Number,
      width: 5
    },
    argPeriErrplus: {
      type: Number,
      width: 5
    },
    argPeriErrminus: {
      type: Number,
      width: 5
    },
    periodYr: {
      type: Number,
      width: 5
    },
    periodYrErrplus: {
      type: Number,
      width: 5
    },
    periodYrErrminus: {
      type: Number,
      width: 5
    },
    tPeriMjd: {
      type: String,
      length: 10
    },
    tPeri: {
      type: String,
      length: 10
    },
    tPeri_errplus: {
      type: Number,
      width: 5
    },
    tPeri_errminus: {
      type: Number,
      width: 5
    },
    massRatio: {
      type: Number,
      width: 5
    },
    ratioErrplus: {
      type: Number,
      width: 5
    },
    ratioErrminus: {
      type: Number,
      width: 5
    },
    systemNumStars: {
      type: Number,
      width: 5
    },
    orbStrength: {
      type: Number,
      width: 5
    },
    orbStrength_err: {
      type: Number,
      width: 5
    },
    totalMass: {
      type: Number,
      width: 5
    },
    systemMass: {
      type: Number,
      width: 5
    },
  },
  relations: {
    identifier: {
      target: 'Identifier',
      type: 'one-to-one',
      inverseSide: 'orbits',
      joinColumn: true
    }
  }
});
