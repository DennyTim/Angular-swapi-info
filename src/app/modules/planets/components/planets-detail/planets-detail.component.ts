import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { PlanetsStateService } from "../../services/planets-state.service";
import { Observable } from "rxjs";
import { PlanetsModel } from "../../../../models/planets.model";
import {
  ActivatedRoute,
  Params,
  Router
} from "@angular/router";
import { PersonsModel } from "../../../../models/presons.model";

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsDetailComponent implements OnInit, OnDestroy {

  public _dataPlanet$: Observable<PlanetsModel>;
  public _planetId$: Observable<Params>;

  public _isArray: (arg: Array<any>) => boolean = Array.isArray;
  public _planetsParams: string[] = [
    'rotation_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'population',
    'residents'
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private planetsStateService: PlanetsStateService
  ) {
  }

  ngOnInit(): void {
    this._dataPlanet$ = this.planetsStateService.getPlanetById();
    this._planetId$ = this.route.params;
  }

  ngOnDestroy(): void {
    this.planetsStateService.clearCurrentPlanet();
  }

  async openResidentInfo(planetsId: string, person: PersonsModel): Promise<void> {
    const personParams = person.url.split('/')
                               .filter(item => item);
    const personId = Number(personParams[personParams.length - 1]);
    try {
      await this.router.navigate(
        [ `/planets/${ +planetsId }/residents/${ personId }` ],
        { relativeTo: this.route }
      );
    } catch (err) {
      console.error(err);
    }
  }
}
