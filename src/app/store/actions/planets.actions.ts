import {
  createAction,
  props
} from "@ngrx/store";
import { PlanetsInfoModel } from "../../models/planets-state.model";

export enum PlanetsActions {
  loadPlanets = '[Planets Page] Get Planets',
  loadMorePlanets = '[Planets Page] Get More Planets',
  loadPlanetsSuccess = '[Planets Page] Get Planets Success',
  loadMorePlanetsSuccess = '[Planets Page] Get More Planets Success'
}

export const loadPlanets = createAction(PlanetsActions.loadPlanets);
export const loadMorePlanets = createAction(PlanetsActions.loadMorePlanets);

export const loadPlanetsSuccess = createAction(
  PlanetsActions.loadPlanetsSuccess,
  props<{ planetsInfo: PlanetsInfoModel }>()
);
export const loadMorePlanetsSuccess = createAction(
  PlanetsActions.loadMorePlanetsSuccess,
  props<{ planetsInfo: PlanetsInfoModel }>()
);
