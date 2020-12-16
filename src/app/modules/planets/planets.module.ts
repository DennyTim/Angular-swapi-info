import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveComponentModule } from "@ngrx/component";
import { PlanetsRoutingModule } from "./planets-routing.module";
import { PlanetsComponent } from './planets.component';
import { PlanetsPreviewComponent } from './components/planets-preview/planets-preview.component';
import { PlanetsDetailComponent } from './components/planets-detail/planets-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    PlanetsRoutingModule,
    ReactiveComponentModule
  ],
  declarations: [
    PlanetsComponent,
    PlanetsPreviewComponent,
    PlanetsDetailComponent
  ]
})
export class PlanetsModule {
}
