import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingService } from "../services/loading.service";
import {
  concatMap,
  finalize
} from "rxjs/operators";
import {
  Observable,
  timer
} from "rxjs";

@Injectable()
export class ShowLoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showLoading();

    return timer(500)
      .pipe(concatMap(() =>
        next.handle(request)
            .pipe(finalize(() => this.loadingService.hideLoading()))
    ))
  }
}
