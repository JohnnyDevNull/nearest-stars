import { SystemModel } from './system.model';

export interface SystemTypeModel {
  id?: number;
  name?: string;
  descr?: string;
  createdAt?: Date;
  updatedAt?: Date;

  systems?: SystemModel[];
}
