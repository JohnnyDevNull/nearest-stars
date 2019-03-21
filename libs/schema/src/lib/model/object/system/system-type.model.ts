import { ObjectSystemModel } from './system.model';

export interface ObjectSystemTypeModel {
  id?: number;
  name?: string;
  descr?: string;
  createdAt?: Date;
  updatedAt?: Date;

  systems?: ObjectSystemModel[];
}
