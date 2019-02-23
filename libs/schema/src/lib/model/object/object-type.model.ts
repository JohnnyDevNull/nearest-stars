import { ObjectModel } from './object.model';

export interface ObjectTypeModel {
  id?: number;
  name?: string;
  descr?: string;
  createdAt?: Date;
  updatedAt?: Date;

  objects?: ObjectModel[];
}
