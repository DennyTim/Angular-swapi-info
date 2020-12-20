import {
  createAction,
  props
} from "@ngrx/store";
import { PlanetsInfoModel } from "../../models/planets-state.model";
import { PlanetsModel } from "../../models/planets.model";

export enum PlanetsActions {
  loadPlanets = '[Planets Page] Get Planets',
  loadPlanetById = '[Planets Page] Get Planet By Id',
  loadMorePlanets = '[Planets Page] Get More Planets',
  loadPlanetsSuccess = '[Planets Page] Get Planets Success',
  loadMorePlanetsSuccess = '[Planets Page] Get More Planets Success',
  loadPlanetByIdSuccess = '[Planets Page] Load Planet By Id Success',
  clearSelectedPlanet = '[Planets Page] Clear Selected Planet'
}

export const loadPlanets = createAction(PlanetsActions.loadPlanets);
export const loadMorePlanets = createAction(PlanetsActions.loadMorePlanets);
export const clearSelectedPlanet = createAction(PlanetsActions.clearSelectedPlanet);

export const loadPlanetById = createAction(
  PlanetsActions.loadPlanetById,
  props<{ id: number }>()
);

export const loadPlanetsSuccess = createAction(
  PlanetsActions.loadPlanetsSuccess,
  props<{ planetsInfo: PlanetsInfoModel }>()
);

export const loadMorePlanetsSuccess = createAction(
  PlanetsActions.loadMorePlanetsSuccess,
  props<{ planetsInfo: PlanetsInfoModel }>()
);

export const loadPlanetByIdSuccess = createAction(
  PlanetsActions.loadPlanetByIdSuccess,
  props<{ selectedPlanet: PlanetsModel }>()
);
