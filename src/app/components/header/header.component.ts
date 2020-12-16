import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { MainState } from "../../store";
import {
  select,
  Store
} from "@ngrx/store";
import { getPagesQuantity } from "../../store/selectors/planets.selector";
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public _countPages$: Observable<number>;

  constructor(private store: Store<MainState>) {
  }

  ngOnInit(): void {
    this._countPages$ = this.store.pipe(select(getPagesQuantity));
  }
}
