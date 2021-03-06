import { ObjectMagnitudeModel } from '../../model/index';
import { EntitySchema } from 'typeorm';

export const ObjectMagnitudeEntity = new EntitySchema<ObjectMagnitudeModel>({
  name: 'ObjectMagnitude',
  columns: {
    fuvMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    nuvMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    sdssuMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    sdssgMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    sdssrMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    sdssiMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    sdsszMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    ps1yMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    j2massMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    h2massMag: {
      type: Number,
      width: 2,
      precision: 3
    },
    w1Mag: {
      type: Number,
      width: 2,
      precision: 3
    },
    w2Mag: {
      type: Number,
      width: 2,
      precision: 3
    },
    w3Mag: {
      type: Number,
      width: 2,
      precision: 3
    },
    w4Mag: {
      type: Number,
      width: 2,
      precision: 3
    }
  },
  relations: {
    object: {
      target: 'Object',
      type: 'one-to-one',
      inverseSide: 'magnitudes',
      joinColumn: true,
      primary: true
    }
  }
});
