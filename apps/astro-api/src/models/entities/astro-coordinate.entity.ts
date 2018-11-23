import { AstroCoordinateModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const AstroCoordinateEntity = new EntitySchema<AstroCoordinateModel>({
  name: 'AstroCoordinate',
  columns: {
    ra: {
      type: Number,
      width: 10
    },
    raErr: {
      type: Number,
      width: 10
    },
    dec: {
      type: Number,
      width: 10
    },
    decErr: {
      type: Number,
      width: 10
    },
    epoch: {
      type: Number,
      width: 10
    }
  },
  relations: {
    identifier: {
      target: 'AstroObject',
      type: 'one-to-one',
      inverseSide: 'coordinates',
      joinColumn: true,
      primary: true
    }
  }
});
