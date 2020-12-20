import { Injectable } from "@angular/core";
import {
  Actions,
  createEffect,
  ofType
} from "@ngrx/effects";
import { PlanetsRequestService } from "../../services/planets-request.service";
import { EMPTY } from "rxjs";
import { cloneDeep } from 'lodash';
import {
  catchError,
  map,
  mergeMap,
  withLatestFrom
} from "rxjs/operators";
import {
  loadMorePlanetsSuccess,
  loadPlanetByIdSuccess,
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
import { PlanetsModel } from "../../models/planets.model";
import { PersonsModel } from "../../models/presons.model";

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

  loadPlanetById$ = createEffect(() => this.actions$.pipe(
    ofType(PlanetsActions.loadPlanetById),
    mergeMap(({ id }: { id: number }) =>
      this.planetsService.getPlanetsById(id)
          .pipe(catchError(() => EMPTY))
    ),
    mergeMap((planet: PlanetsModel) => {
      return this.planetsService.getPersonsByBulkFetching(planet.residents)
                 .pipe(
                   map((residents: PersonsModel[]) => {
                     return loadPlanetByIdSuccess({
                       selectedPlanet: cloneDeep({
                         ...planet,
                         residents: residents as any
                       })
                     })
                   }),
                   catchError(() => EMPTY)
                 )
    })
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
