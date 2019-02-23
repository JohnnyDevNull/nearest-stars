import { ObjectCoordinateModel } from '../../model/index';
import { EntitySchema } from 'typeorm';

export const ObjectCoordinateEntity = new EntitySchema<ObjectCoordinateModel>({
  name: 'ObjectCoordinate',
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
    object: {
      target: 'Object',
      type: 'one-to-one',
      inverseSide: 'coordinates',
      joinColumn: true,
      primary: true
    }
  }
});
