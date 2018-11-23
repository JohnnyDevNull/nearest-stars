import { AstroIdentifierModel } from './astro-identifier.model';

export interface AstroVectorsModel {

  identifier: AstroIdentifierModel;

  pmRa: number;
  pmRaErrplus: number;
  pmRaErrminus: number;
  pmDec: number;
  pmDecErrplus: number;
  pmDecErrminus: number;
  parallax: number;
  parallaxErrplus: number;
  parallaxErrminus: number;
  parallaxType: string;
  radVel: number;
  radVelErrplus: number;
  radValErrminus: number;
  orbitType: number;
}
