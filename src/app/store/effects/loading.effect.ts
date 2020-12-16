import { Injectable } from "@angular/core";
import {
  Actions,
  createEffect,
  ofType
} from "@ngrx/effects";
import { Action } from "@ngrx/store";
import {
  LoadingActions,
  requestHideLoadingSuccess,
  requestLoadingSuccess
} from "../actions/loading.actions";
import { map } from "rxjs/operators";

@Injectable()
export class LoadingEffect {
  constructor(private actions$: Actions) {
  }

  showLoadingEffect$ = createEffect(() => this.actions$.pipe(
    ofType(LoadingActions.requestLoading),
    map((): Action => requestLoadingSuccess({ loading: true }))
  ));

  hideLoadingEffect$ = createEffect(() => this.actions$.pipe(
    ofType(LoadingActions.requestHideLoading),
    map((): Action => requestHideLoadingSuccess({ loading: false }))
  ));
}
