import { AstroSystemModel } from '@nearest-stars/data-models';

export interface AstroSystemTypeModel {
  id?: number;
  name?: string;
  descr?: string;
  createdAt?: Date;
  updatedAt?: Date;

  systems?: AstroSystemModel[];
}
