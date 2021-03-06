import { ObjectVectorModel } from '../../model/index';
import { EntitySchema } from 'typeorm';

export const ObjectVectorEntity = new EntitySchema<ObjectVectorModel>({
  name: 'ObjectVector',
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
      width: 5,
    },
    radVelErrplus: {
      type: Number,
      width: 5,
    },
    radValErrminus: {
      type: Number,
      width: 5,
    },
    orbitType: {
      type: Number,
      width: 5,
    },
  },
  relations: {
    object: {
      target: 'Object',
      type: 'one-to-one',
      inverseSide: 'vectors',
      joinColumn: true,
      primary: true
    }
  }
});
