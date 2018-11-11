import { VectorsModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const VectorsEntity = new EntitySchema<VectorsModel>({
  name: 'Vectors',
  columns: {
    pmRa: {
      type: Number,
      width: 5,
    },
    pmRaErrplus: {
      type: Number,
      width: 5,
    },
    pmRaErrminus: {
      type: Number,
      width: 5,
    },
    pmDec: {
      type: Number,
      width: 5,
    },
    pmDecErrplus: {
      type: Number,
      width: 5,
    },
    pmDecErrminus: {
      type: Number,
      width: 5,
    },
    parallax: {
      type: Number,
      width: 5,
    },
    parallaxErrplus: {
      type: Number,
      width: 5,
    },
    parallaxErrminus: {
      type: Number,
      width: 5,
    },
    parallaxType: {
      type: String,
      length: 3,
    },
    radVel: {
      type: Number,
      length: 5,
    },
    radVelErrplus: {
      type: Number,
      length: 5,
    },
    radValErrminus: {
      type: Number,
      length: 5,
    },
    orbitType: {
      type: Number,
      length: 5,
    },
  },
  relations: {
    identifier: {
      target: 'Identifier',
      type: 'one-to-one',
      inverseSide: 'vectors',
      joinColumn: true
    }
  }
});
