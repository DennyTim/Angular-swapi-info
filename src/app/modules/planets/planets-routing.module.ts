import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { PlanetsComponent } from "./planets.component";
import { PlanetsResolver } from "./services/planets.resolver";
import { PlanetsDetailComponent } from "./components/planets-detail/planets-detail.component";
import { PlanetsListComponent } from "./components/planets-list/planets-list.component";
import { PlanetResidentsComponent } from "./components/planet-residents/planet-residents.component";
import { ResidentsResolver } from "./services/residents.resolver";

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    children: [
      {
        path: '',
        component: PlanetsListComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: PlanetsDetailComponent,
        resolve: { planet: PlanetsResolver },
        pathMatch: 'full',
      },
      {
        path: ':id/residents/:userId',
        component: PlanetResidentsComponent,
        resolve: { residents: ResidentsResolver },
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PlanetsRoutingModule {
}
