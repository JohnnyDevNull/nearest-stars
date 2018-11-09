import { EntitySchema } from 'typeorm';
import { IdentifierModel } from './identifier.model';

export interface MagnitudesModel {
  identifier: IdentifierModel;
  fuvMag: number;
  nuvMag: number;
  sdssuMag: number;
  sdssgMag: number;
  sdssrMag: number;
  sdssiMag: number;
  sdsszMag: number;
  ps1yMag: number;
  j2massMag: number;
  h2massMag: number;
  k2massMag: number;
  w1Mag: number;
  w2Mag: number;
  w3Mag: number;
  w4Mag: number;
}

export const MagnitudesEntity = new EntitySchema<MagnitudesModel>({
  name: 'Magnitudes',
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
    identifier: {
      target: 'Identifier',
      type: 'one-to-one',
      inverseSide: 'magnitudes',
      joinColumn: true
    }
  }
});
