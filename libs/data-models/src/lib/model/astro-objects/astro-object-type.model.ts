import { AstroObjectModel } from './astro-object.model';

export interface AstroObjectTypeModel {
  id?: number;
  name?: string;
  descr?: string;
  createdAt?: Date;
  updatedAt?: Date;

  objects?: AstroObjectModel[];
}
