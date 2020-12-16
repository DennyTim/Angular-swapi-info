import {
  Action,
  createReducer,
  on
} from "@ngrx/store";
import {
  addPlanets,
  setPlanets
} from "./reducers-list/planets-list";
import { PlanetsStateModel } from "../../models/planets-state.model";
import {
  loadMorePlanetsSuccess,
  loadPlanetsSuccess
} from "../actions/planets.actions";

const initialState: PlanetsStateModel = {
  planetsInfo: {},
  allPlanets: []
};

const reducer = createReducer(
  initialState,
  on(loadPlanetsSuccess, setPlanets),
  on(loadMorePlanetsSuccess, addPlanets)
);

export function planetsReducer(state: PlanetsStateModel | undefined, action: Action): PlanetsStateModel {
  return reducer(state, action);
}
