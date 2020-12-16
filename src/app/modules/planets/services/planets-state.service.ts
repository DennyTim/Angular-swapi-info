import { Injectable } from '@angular/core';
import {
  select,
  Store
} from "@ngrx/store";
import { MainState } from "../../../store";
import {
  loadMorePlanets,
  loadPlanets
} from "../../../store/actions/planets.actions";
import { Observable } from "rxjs";
import {
  getNextUrl,
  selectAllPlanetsList
} from "../../../store/selectors/planets.selector";
import { selectLoadingLStatus } from "../../../store/selectors/loading.selector";
import { PlanetsModel } from "../../../models/planets.model";
import { map } from "rxjs/operators";

@Injectable()
export class PlanetsStateService {

  constructor(private store: Store<MainState>) {
  }

  loadPlanets(): boolean {
    this.store.dispatch(loadPlanets());
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

  getLoadingStatus(): Observable<boolean> {
    return this.store.pipe(select(selectLoadingLStatus));
  }
}
