import { ObjectPhysicalInfoModel } from '../../model/index';
import { EntitySchema } from 'typeorm';

export const ObjectPhysicalInfoEntity = new EntitySchema<ObjectPhysicalInfoModel>({
  name: 'ObjectPhysicalInfo',
  columns: {
    specType: {
      type: String,
      length: 5
    },
    specClass: {
      type: String,
      length: 5
    },
    luminosityType: {
      type: Number,
      width: 5
    },
    massSm: {
      type: Number,
      width: 5
    },
    massErrplus: {
      type: Number,
      width: 5
    },
    massErrminus: {
      type: Number,
      width: 5
    },
    radiusSr: {
      type: Number,
      width: 5
    },
    radiusErrplus: {
      type: Number,
      width: 5
    },
    radiusErrminus: {
      type: Number,
      width: 5
    },
    feH: {
      type: Number,
      width: 5
    },
    feHErrplus: {
      type: Number,
      width: 5
    },
    feHErrminus: {
      type: Number,
      width: 5
    },
    rotDays: {
      type: Number,
      width: 5
    },
    rotDaysErrplus: {
      type: Number,
      width: 5
    },
    rotDaysErrminus: {
      type: Number,
      width: 5
    },
    population: {
      type: Number,
      width: 5
    },
    ageGyr: {
      type: Number,
      width: 5
    },
    ageErrplus: {
      type: Number,
      width: 5
    },
    ageErrminus: {
      type: Number,
      width: 5
    },
  },
  relations: {
    object: {
      target: 'Object',
      type: 'one-to-one',
      inverseSide: 'physicalInfo',
      joinColumn: true,
      primary: true
    }
  }
});
