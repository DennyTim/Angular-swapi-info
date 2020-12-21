import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {
  Observable,
  of
} from 'rxjs';
import { PersonsModel } from "../../../models/presons.model";
import { PlanetsRequestService } from "../../../services/planets-request.service";
import { environment } from "../../../../environments/environment";
import { PlanetsStateService } from "./planets-state.service";
import {
  switchMap,
  take
} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ResidentsResolver implements Resolve<PersonsModel> {
  readonly usersApi: string = '/api/people'

  constructor(
    private planetsStateService: PlanetsStateService,
    private planetsRequestService: PlanetsRequestService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PersonsModel> {
    const residentId: number = +route.params['userId'];
    const residentUrl: string = `${ environment.swapiUri }${ this.usersApi }/${ residentId }`;
    return this.planetsStateService.getResidentById(residentId)
               .pipe(
                 take(1),
                 switchMap((personsModel: PersonsModel): Observable<PersonsModel> => {
                   if (!personsModel) {
                     return this.planetsRequestService.getPersonsByUrl(residentUrl);
                   } else {
                     return of(personsModel);
                   }
                 })
               )
  }
}
