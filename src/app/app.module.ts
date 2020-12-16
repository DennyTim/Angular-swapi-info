import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';

import {
  effectsList,
  mainReducer
} from "./store";
import { AppRoutingModule } from "./app-routing.module";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from "@angular/material/badge";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowLoadingInterceptor } from "./interceptors/show-loading.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(mainReducer),
    EffectsModule.forRoot(effectsList),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ShowLoadingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
