import { ObjectModel } from '../object.model';
import { ObjectSystemTypeModel } from './system-type.model';

export interface ObjectSystemModel {
  id?: number;
  diskFlag?: boolean;
  planetsFlag?: boolean;
  nDisks?: number;
  nPlanetsConfirmed?: number;
  nPlanetsUnconfirmed?: number;
  nPlanetsDubious?: number;
  nPlanetsPlausible?: number;
  nPlanetsDisproven?: number;
  createdAt?: Date;
  updatedAt?: Date;

  systemType: ObjectSystemTypeModel;
  objects?: ObjectModel[];
}
