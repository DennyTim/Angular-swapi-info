import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveComponentModule } from "@ngrx/component";
import { PlanetsRoutingModule } from "./planets-routing.module";
import { PlanetsComponent } from './planets.component';
import { PlanetsDetailComponent } from './components/planets-detail/planets-detail.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    PlanetsRoutingModule,
    ReactiveComponentModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [
    PlanetsComponent,
    PlanetsDetailComponent,
    PlanetsListComponent,
  ]
})
export class PlanetsModule {
}
