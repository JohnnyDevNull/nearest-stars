import { EntitySchema } from 'typeorm';
import { IdentifierModel } from './identifier.model';

export interface PhysicalInfoModel {

  identifier: IdentifierModel;

  specType: string;
  specClass: string;
  luminosityType: number;
  massSm: number;
  massErrplus: number;
  massErrminus: number;
  radiusSr: number;
  radiusErrplus: number;
  radiusErrminus: number;
  feH: number;
  feHErrplus: number;
  feHErrminus: number;
  rotDays: number;
  rotDaysErrplus: number;
  rotDaysErrminus: number;
  population: number;
  ageGyr: number;
  ageErrplus: number;
  ageErrminus: number;
}

export const PhysicalInfoEntity = new EntitySchema<PhysicalInfoModel>({
  name: 'PhysicalInfo',
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
    identifier: {
      target: 'Identifier',
      type: 'one-to-one',
      inverseSide: 'physicalInfo',
      joinColumn: true
    }
  }
});
