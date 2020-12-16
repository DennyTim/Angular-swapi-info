import { Injectable } from '@angular/core';
import {
  requestHideLoading,
  requestLoading
} from "../store/actions/loading.actions";
import { Store } from "@ngrx/store";
import { MainState } from "../store";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private numberOfLoaders = 0;
  private loading: Element;

  constructor(private store: Store<MainState>) {
  }

  public showLoading(lockUi: boolean = false): void {
    !this.loading && this.initLoading(lockUi);
    this.numberOfLoaders === 0 && requestAnimationFrame(() =>
      this.numberOfLoaders !== 0
      && this.setLoadingStartClassName()
      && requestAnimationFrame(() => this.setLoadingProcess(lockUi)),
    );
    this.numberOfLoaders++;
  }

  public hideLoading(lockUi: boolean = false): void {
    !this.loading && this.initLoading(lockUi);
    this.numberOfLoaders === 1 && requestAnimationFrame(() =>
      this.numberOfLoaders === 0 && this.setLoadingFinish(lockUi),
    );
    this.numberOfLoaders--;
  }

  private initLoading(lockUi: boolean): void {
    this.loading = document.createElement('div');
    this.setLoadingFinish(lockUi) && document.body.appendChild(this.loading);
  }

  private setLoadingStartClassName(): boolean {
    this.loading.className = 'top-loader _loading-start';
    return true;
  }

  private setLoadingProcess(lockUi: boolean): boolean {
    this.loading.className = 'top-loader _loading';
    lockUi === false && this.store.dispatch(requestLoading());
    return true;
  }

  private setLoadingFinish(lockUi: boolean): boolean {
    this.loading.className = 'top-loader';
    lockUi === false && this.store.dispatch(requestHideLoading());
    return true;
  }
}
