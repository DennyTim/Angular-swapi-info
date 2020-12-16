import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { PlanetsComponent } from "./planets.component";
import { PlanetsPreviewComponent } from "./components/planets-preview/planets-preview.component";
import { PlanetsDetailComponent } from "./components/planets-detail/planets-detail.component";
import { PlanetsResolver } from "./services/planets.resolver";

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    children: [
      {
        path: '',
        component: PlanetsPreviewComponent
      },
      {
        path: ':id',
        component: PlanetsDetailComponent,
        resolve: [ PlanetsResolver ]
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PlanetsRoutingModule {
}
