import {
  PlanetsInfoModel,
  PlanetsStateModel
} from "../../models/planets-state.model";
import { createSelector } from "@ngrx/store";
import { MainState } from "../index";
import { PlanetsModel } from "../../models/planets.model";

export const selectPlanetsState = (state: MainState): PlanetsStateModel => state.planetsState;
export const selectPlanetsList = createSelector(selectPlanetsState, (state: PlanetsStateModel): Partial<PlanetsInfoModel> => state.planetsInfo);
export const selectAllPlanetsList = createSelector(selectPlanetsState, (state: PlanetsStateModel): Partial<PlanetsModel[]> => state.allPlanets);
export const getNextUrl = createSelector(selectPlanetsList, (planetsInfo: Partial<PlanetsInfoModel>): string => planetsInfo.next);
export const getPagesQuantity = createSelector(selectPlanetsState, (state: PlanetsStateModel): number => state.allPlanets.length / 10);
