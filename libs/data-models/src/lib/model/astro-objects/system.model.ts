export interface SystemModel {
  objectId?: number;
  diskFlag: boolean;
  planetsFlag: boolean;
  nDisks: number;
  nPlanetsConfirmed: number;
  nPlanetsUnconfirmed: number;
  nPlanetsDubious: number;
  nPlanetsPlausible: number;
  nPlanetsDisproven: number;
}
