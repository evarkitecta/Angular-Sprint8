import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './layout/pages/main-page/main-page.component';
import { HomePageComponent } from './starwars/pages/home/home-page.component';
import { StarshipsPageComponent } from './starwars/pages/starships-page/starships-page.component';
import { StarshipCardPageComponent } from './starwars/pages/starship-card-page/starship-card-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'starships',
        component: StarshipsPageComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'starships/:id',
        component: StarshipCardPageComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },

      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
