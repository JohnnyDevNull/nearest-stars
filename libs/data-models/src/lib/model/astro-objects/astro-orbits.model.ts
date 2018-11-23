import { AstroIdentifierModel } from './astro-identifier.model';

export interface AstroOrbitsModel {

  identifier: AstroIdentifierModel;

  comp1?: string;
  comp2?: string;
  a?: number;
  aErrplus?: number;
  aErrminus?: number;
  e?: number;
  eErrplus?: number;
  eErrminus?: number;
  i?: number;
  iErrplus?: number;
  iErrminus?: number;
  node?: number;
  nodeErrplus?: number;
  nodeErrminus?: number;
  peri?: number;
  periErrplus?: number;
  periErrminus?: number;
  argPeri?: number;
  argPeriErrplus?: number;
  argPeriErrminus?: number;
  periodYr?: number;
  periodYrErrplus?: number;
  periodYrErrminus?: number;
  tPeriMjd?: string;
  tPeri?: string;
  tPeri_errplus?: number;
  tPeri_errminus?: number;
  massRatio?: number;
  ratioErrplus?: number;
  ratioErrminus?: number;
  systemNumStars?: number;
  orbStrength?: number;
  orbStrength_err?: number;
  totalMass?: number;
  systemMass?: number;
}
