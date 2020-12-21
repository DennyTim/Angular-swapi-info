import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PersonsModel } from "../../../../models/presons.model";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-planet-residents',
  templateUrl: './planet-residents.component.html',
  styleUrls: [ './planet-residents.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetResidentsComponent implements OnInit {
  public _residents$: Observable<PersonsModel>;
  public _residentsField: string[] = [ 'name', 'height', 'mass', 'gender' ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._residents$ = this.route.data.pipe(map(
      ({ residents }: { residents: PersonsModel }): PersonsModel => residents)
    );
  }
}
