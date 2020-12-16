import { Injectable } from "@angular/core";
import {
  Actions,
  createEffect,
  ofType
} from "@ngrx/effects";
import { PlanetsRequestService } from "../../services/planets-request.service";
import { EMPTY } from "rxjs";
import {
  catchError,
  map,
  mergeMap,
  withLatestFrom
} from "rxjs/operators";
import {
  loadMorePlanetsSuccess,
  loadPlanetsSuccess,
  PlanetsActions
} from "../actions/planets.actions";
import {
  select,
  Store
} from "@ngrx/store";
import { getNextUrl } from "../selectors/planets.selector";
import { MainState } from "../index";
import { PlanetsInfoModel } from "../../models/planets-state.model";

@Injectable()
export class PlanetsEffect {

  constructor(
    private actions$: Actions,
    private store: Store<MainState>,
    private planetsService: PlanetsRequestService
  ) {
  }

  loadPlanets$ = createEffect(() => this.actions$.pipe(
    ofType(PlanetsActions.loadPlanets),
    mergeMap(() =>
      this.planetsService.getPlanets()
          .pipe(
            map((planetsInfo: PlanetsInfoModel) => loadPlanetsSuccess({ planetsInfo: planetsInfo })),
            catchError(() => EMPTY)
          )
    )
  ));

  loadMorePlanets$ = createEffect(() => this.actions$.pipe(
    ofType(PlanetsActions.loadMorePlanets),
    withLatestFrom(this.store.pipe(select(getNextUrl))),
    mergeMap(([ , url ]: [ PlanetsActions.loadMorePlanets, string ]) =>
      this.planetsService.getPlanetsByUrl(url)
          .pipe(
            map((planetsInfo: PlanetsInfoModel) => loadMorePlanetsSuccess({ planetsInfo: planetsInfo })),
            catchError(() => EMPTY)
          )
    )
  ));
}
