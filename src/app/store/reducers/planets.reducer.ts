import {
  Action,
  createReducer,
  on
} from "@ngrx/store";
import {
  addOnePlanet,
  addPlanets,
  clearCurrentKey,
  setPlanets
} from "./reducers-list/planets-list";
import { PlanetsStateModel } from "../../models/planets-state.model";
import {
  clearSelectedPlanet,
  loadMorePlanetsSuccess,
  loadPlanetByIdSuccess,
  loadPlanetsSuccess
} from "../actions/planets.actions";

const initialState: PlanetsStateModel = {
  planetsInfo: {},
  allPlanets: [],
  selectedPlanet: null
};

const reducer = createReducer(
  initialState,
  on(loadPlanetsSuccess, setPlanets),
  on(loadMorePlanetsSuccess, addPlanets),
  on(loadPlanetByIdSuccess, addOnePlanet),
  on(clearSelectedPlanet, clearCurrentKey('selectedPlanet', initialState['selectedPlanet']))
);

export function planetsReducer(state: PlanetsStateModel | undefined, action: Action): PlanetsStateModel {
  return reducer(state, action);
}
