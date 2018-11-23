import { AstroObjectModel } from './astro-object.model';

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

  objects?: AstroObjectModel[];
}
