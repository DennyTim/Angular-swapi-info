import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { PlanetsStateService } from "../../services/planets-state.service";
import { Observable } from "rxjs";
import { PlanetsModel } from "../../../../models/planets.model";

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: [ './planets-detail.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsDetailComponent implements OnInit, OnDestroy {

  public _isArray: (arg: Array<any>) => boolean = Array.isArray;
  public _getKeys: (arg: Object) => string[] = Object.keys;
  public _dataPlanet$: Observable<PlanetsModel>;
  public _planetsParams: string[] = [
    'rotation_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'population',
    'residents'
  ]

  constructor(private planetsStateService: PlanetsStateService) {
  }

  ngOnInit(): void {
    this._dataPlanet$ = this.planetsStateService.getPlanetById();
  }

  ngOnDestroy(): void {
    this.planetsStateService.clearCurrentPlanet();
  }
}
