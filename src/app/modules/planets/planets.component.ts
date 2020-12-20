import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { PlanetsStateService } from "./services/planets-state.service";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: [ './planets.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ PlanetsStateService ]
})
export class PlanetsComponent implements OnInit {
  public currentPlanetName$: Observable<string>;

  constructor(private planetsStateService: PlanetsStateService) {
  }

  ngOnInit(): void {
    this.currentPlanetName$ = this.planetsStateService.getPlanetById()
                                  .pipe(pluck('name'));
  }
}
