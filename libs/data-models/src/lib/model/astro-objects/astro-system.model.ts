import { AstroObjectModel } from './astro-object.model';

export interface AstroSystemModel {

  object?: AstroObjectModel;

  /**
   * Star system the object belongs to.
   * Proxima Centauri would be in the system Alpha Centauri
   */
  system?: string;

  diskFlag?: boolean;
  planetsFlag?: boolean;
  nDisks?: number;
  nPlanetsConfirmed?: number;
  nPlanetsUnconfirmed?: number;
  nPlanetsDubious?: number;
  nPlanetsPlausible?: number;
  nPlanetsDisproven?: number;
}
