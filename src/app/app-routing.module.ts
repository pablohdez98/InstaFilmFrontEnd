import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule) },
  { path: 'series', loadChildren: () => import('./pages/series/series.module').then(m => m.SeriesModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
