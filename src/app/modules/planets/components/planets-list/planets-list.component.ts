import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { PlanetsStateService } from "../../services/planets-state.service";
import { Observable } from "rxjs";
import { PlanetsModel } from "../../../../models/planets.model";
import {
  ActivatedRoute,
  Router
} from "@angular/router";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: [ './planets-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsListComponent implements OnInit {
  public _allPlanets$: Observable<Partial<PlanetsModel[]>>;
  public _loadingStatus$: Observable<boolean>;
  public _isLoadMoreHidden$: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private planetsService: PlanetsStateService
  ) {
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

  async openDetailInfo(planetUrl: string): Promise<void> {
    const planetParams = planetUrl.split('/')
                                  .filter(item => item);
    const id = Number(planetParams[planetParams.length - 1]);
    try {
      const isNavigate = await this.router.navigate(
        [ `/planets/${ id }` ],
        { relativeTo: this.route }
      );
      isNavigate && this.planetsService.loadCurrentPlanetById(id)
    } catch (err) {
      console.error(err);
    }
  }
}
