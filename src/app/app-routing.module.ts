import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes
} from "@angular/router";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  {
    path: 'planets',
    loadChildren: () => import('./modules/planets/planets.module').then(m => m.PlanetsModule)
  },
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
