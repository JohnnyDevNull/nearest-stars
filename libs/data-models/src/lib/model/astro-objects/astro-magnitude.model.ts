import { AstroObjectModel } from './astro-object.model';

export interface AstroMagnitudeModel {
  identifier: AstroObjectModel;
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
