import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {
  map,
  pluck
} from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: [ './error-page.component.scss' ]
})
export class ErrorPageComponent implements OnInit {
  private errorMessage$: Observable<string>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.errorMessage$ = this.route.data.pipe(pluck('message'), map((message: string) =>
      message || this.route.snapshot.data['message']
    ));
  }
}
