import { AstroObjectModel } from './astro-object.model';
import { AstroSystemTypeModel } from './astro-system-type.model';

export interface AstroSystemModel {
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

  systemType: AstroSystemTypeModel;
  objects?: AstroObjectModel[];
}
