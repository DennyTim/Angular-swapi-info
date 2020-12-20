import {
  Inject,
  Injectable
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {
  Observable,
  of
} from 'rxjs';
import { PlanetsStateService } from "./planets-state.service";
import {
  pluck,
  switchMap,
  take
} from "rxjs/operators";
import { PlanetsModel } from "../../../models/planets.model";
import {
  Actions,
  ofType
} from "@ngrx/effects";
import { PlanetsActions } from "../../../store/actions/planets.actions";

@Injectable({
  providedIn: 'root'
})
export class PlanetsResolver implements Resolve<PlanetsModel> {

  constructor(
    private planetsStateService: PlanetsStateService,
    private actions$: Actions
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PlanetsModel> {
    return this.planetsStateService.getPlanets()
               .pipe(
                 take(1),
                 switchMap((planets: Partial<PlanetsModel[]>) => {
                   const planetsId: number = +route.params['id'];
                   if (planets.length === 0) {
                     this.planetsStateService.loadCurrentPlanetById(planetsId)
                     return this.actions$.pipe(
                       ofType(PlanetsActions.loadPlanetByIdSuccess),
                       take(1)
                     );
                   } else {
                     return of(planets[planetsId]);
                   }
                 })
               )
  }
}
