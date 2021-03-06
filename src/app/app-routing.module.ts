import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  { path: 'admin/users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: 'admin/films', loadChildren: () => import('./pages/films-admin/films-admin.module').then(m => m.FilmsAdminModule) },
  { path: 'admin/series', loadChildren: () => import('./pages/series-admin/series-admin.module').then(m => m.SeriesAdminModule) },
  { path: 'series', loadChildren: () => import('./pages/series/series.module').then(m => m.SeriesModule) },
  { path: 'films', loadChildren: () => import('./pages/films/films.module').then(m => m.FilmsModule) },
  { path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
  { path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
