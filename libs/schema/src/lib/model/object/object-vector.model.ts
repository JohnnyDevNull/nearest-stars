import { ObjectModel } from './object.model';

export interface ObjectVectorModel {

  object?: ObjectModel;

  pmRa?: number;
  pmRaErrplus?: number;
  pmRaErrminus?: number;
  pmDec?: number;
  pmDecErrplus?: number;
  pmDecErrminus?: number;
  parallax?: number;
  parallaxErrplus?: number;
  parallaxErrminus?: number;
  parallaxType?: string;
  radVel?: number;
  radVelErrplus?: number;
  radValErrminus?: number;
  orbitType?: number;
}
