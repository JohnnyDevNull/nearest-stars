import { AstroIdentifierModel } from './astro-identifier.model';

export interface AstroSystemModel {

  identifier: AstroIdentifierModel;

  /**
   * Star system the object belongs to.
   * Proxima Centauri would be in the system Alpha Centauri
   */
  system?: string;

  diskFlag: boolean;
  planetsFlag: boolean;
  nDisks: number;
  nPlanetsConfirmed: number;
  nPlanetsUnconfirmed: number;
  nPlanetsDubious: number;
  nPlanetsPlausible: number;
  nPlanetsDisproven: number;
}
