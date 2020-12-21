import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes
} from "@angular/router";
import { NgModule } from "@angular/core";
import { ErrorPageComponent } from "./components/error-page/error-page.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/planets',
    pathMatch: 'full'
  },
  {
    path: 'planets',
    loadChildren: () => import('./modules/planets/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {
      message: '404 - Page not found'
    }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, routerConfig) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
