import { AstroObjectModel } from './astro-object.model';

export interface AstroPhysicalInfoModel {

  identifier: AstroObjectModel;

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
