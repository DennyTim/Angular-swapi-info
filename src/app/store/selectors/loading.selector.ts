import { createSelector } from "@ngrx/store";
import { LoadingState } from "../../models/loading-state.model";
import { MainState, } from "../index";

export const selectLoadingState = (state: MainState): LoadingState => state.loadingState;
export const selectLoadingLStatus = createSelector(selectLoadingState, (state: LoadingState): boolean => state.loading);

