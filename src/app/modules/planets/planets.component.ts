import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { Observable } from "rxjs";
import { PlanetsStateService } from "./services/planets-state.service";
import { PlanetsModel } from "../../models/planets.model";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: [ './planets.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ PlanetsStateService ]
})
export class PlanetsComponent implements OnInit {
  public _allPlanets$: Observable<Partial<PlanetsModel[]>>;
  public _loadingStatus$: Observable<boolean>;
  public _isLoadMoreHidden$: Observable<boolean>;

  constructor(private planetsService: PlanetsStateService) {
  }

  ngOnInit(): void {
    this.planetsService.loadPlanets();
    this._allPlanets$ = this.planetsService.getPlanets();
    this._loadingStatus$ = this.planetsService.getLoadingStatus();
    this._isLoadMoreHidden$ = this.planetsService.isLoadMoreHidden();
  }

  loadPlanets() {
    this.planetsService.getMorePlanets();
  }
}
