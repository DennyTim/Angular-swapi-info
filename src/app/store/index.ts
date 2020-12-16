import { planetsReducer } from "./reducers/planets.reducer";
import { PlanetsStateModel } from "../models/planets-state.model";
import { loadingReducer } from "./reducers/loading.reducer";
import { LoadingState } from "../models/loading-state.model";
import { PlanetsEffect } from "./effects/planets.effect";
import { LoadingEffect } from "./effects/loading.effect";

export interface MainState {
  planetsState: PlanetsStateModel,
  loadingState: LoadingState
}

export const mainReducer = {
  planetsState: planetsReducer,
  loadingState: loadingReducer
};

export const effectsList = [ PlanetsEffect, LoadingEffect ];

