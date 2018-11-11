import { IdentifierModel } from './identifier.model';

export interface SystemModel {

  identifier: IdentifierModel;

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
