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
