import { Injectable } from '@angular/core';
import {
  select,
  Store
} from "@ngrx/store";
import { MainState } from "../../../store";
import {
  clearSelectedPlanet,
  loadMorePlanets,
  loadPlanetById,
  loadPlanets,
} from "../../../store/actions/planets.actions";
import { Observable } from "rxjs";
import {
  getNextUrl,
  selectAllPlanetsList,
  selectedPlanet,
  selectResidentById
} from "../../../store/selectors/planets.selector";
import { selectLoadingLStatus } from "../../../store/selectors/loading.selector";
import { PlanetsModel } from "../../../models/planets.model";
import { map } from "rxjs/operators";
import { PersonsModel } from "../../../models/presons.model";

@Injectable({ providedIn: 'root' })
export class PlanetsStateService {

  constructor(private store: Store<MainState>) {
  }

  loadPlanets(): boolean {
    this.store.dispatch(loadPlanets());
    return true;
  }

  loadCurrentPlanetById(id: number): boolean {
    this.store.dispatch(loadPlanetById({ id }));
    return true;
  }

  getMorePlanets(): boolean {
    this.store.dispatch(loadMorePlanets());
    return true;
  }

  isLoadMoreHidden(): Observable<boolean> {
    return this.store.pipe(select(getNextUrl))
               .pipe(map((data: string | null) => !!data))
  }

  getPlanets(): Observable<Partial<PlanetsModel[]>> {
    return this.store.pipe(select(selectAllPlanetsList));
  }

  getPlanetById(): Observable<PlanetsModel> {
    return this.store.pipe(select(selectedPlanet));
  }

  getResidentById(id: number): Observable<PersonsModel> {
    return this.store.pipe(select(selectResidentById(id)));
  }

  getLoadingStatus(): Observable<boolean> {
    return this.store.pipe(select(selectLoadingLStatus));
  }

  clearCurrentPlanet(): boolean {
    this.store.dispatch(clearSelectedPlanet());
    return true;
  }
}
