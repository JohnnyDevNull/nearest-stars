import { ObjectModel } from '../object/object.model';
import { SystemTypeModel } from './system-type.model';

export interface SystemModel {
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

  systemType: SystemTypeModel;
  objects?: ObjectModel[];
}
