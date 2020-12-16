import {
  createAction,
  props
} from "@ngrx/store";

export enum LoadingActions {
  requestLoading = '[Loading Service] Request loading',
  requestLoadingSuccess = '[Loading Service] Request Loading Success',
  requestHideLoading = '[Loading Service] Request Hide Loading',
  requestHideLoadingSuccess = '[Loading Service] Request Hide Loading Success'
}

export const requestLoading = createAction(
  LoadingActions.requestLoading
);

export const requestHideLoading = createAction(
  LoadingActions.requestHideLoading
);

export const requestLoadingSuccess = createAction(
  LoadingActions.requestLoadingSuccess,
  props<{ loading: boolean }>()
);

export const requestHideLoadingSuccess = createAction(
  LoadingActions.requestHideLoadingSuccess,
  props<{ loading: boolean }>()
);
