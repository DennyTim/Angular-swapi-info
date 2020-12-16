import { LoadingState } from "../../models/loading-state.model";
import {
  Action,
  createReducer,
  on
} from "@ngrx/store";
import {
  requestHideLoadingSuccess,
  requestLoadingSuccess
} from "../actions/loading.actions";

export const initialState: LoadingState = {
  loading: false
};

const reducer = createReducer(
  initialState,
  on(
    requestLoadingSuccess,
    (state, { loading }) => ({
      ...state,
      loading: loading,
    }),
  ),
  on(
    requestHideLoadingSuccess,
    (state, { loading }) => ({
      ...state,
      loading: loading,
    }),
  ),
)

export function loadingReducer(state: LoadingState | undefined, action: Action): LoadingState {
  return reducer(state, action);
}
