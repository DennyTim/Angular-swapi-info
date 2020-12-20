import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  Observable,
  of
} from "rxjs";
import { environment } from "../../environments/environment";
import { PlanetsInfoModel } from "../models/planets-state.model";
import { PlanetsModel } from "../models/planets.model";
import { PersonsModel } from "../models/presons.model";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlanetsRequestService {
  readonly planetsUri = '/api/planets';

  constructor(private httpService: HttpClient) {
  }

  getPlanets(): Observable<PlanetsInfoModel> {
    return this.httpService.get<PlanetsInfoModel>(`${ environment.swapiUri }${ this.planetsUri }`);
  }

  getPlanetsById(id: number): Observable<PlanetsModel> {
    return this.httpService.get<PlanetsModel>(`${ environment.swapiUri }${ this.planetsUri }/${ id }/`);
  }

  getPlanetsByUrl(url: string): Observable<PlanetsInfoModel> {
    return this.httpService.get<PlanetsInfoModel>(url);
  }

  getPersonsByUrl(url: string): Observable<PersonsModel> {
    return this.httpService.get<PersonsModel>(url);
  }

  getPersonsByBulkFetching(urls): Observable<PersonsModel[]> {
    const personsList: PersonsModel[] = [];
    const process = (): Observable<any> => {
      const url = urls.shift();
      if (url) {
        return this.getPersonsByUrl(url)
                   .pipe(switchMap((data: PersonsModel) => {
                     personsList.push(data)
                     return process();
                   }));
      } else {
        return of(personsList);
      }
    };
    return process();
  }
}
