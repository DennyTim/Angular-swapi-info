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
import {
  NavigationStart,
  Router
} from "@angular/router";
import {
  distinctUntilChanged,
  filter
} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public _countPages$: Observable<number>;
  public _routeEvent$: Observable<NavigationStart>;

  constructor(
    private store: Store<MainState>,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this._countPages$ = this.store.pipe(select(getPagesQuantity), distinctUntilChanged());
    this._routeEvent$ = this.router.events.pipe(
      filter((event: NavigationStart) => event instanceof NavigationStart),
    )
  }
}
