import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './layout/pages/main-page/main-page.component';
import { HomePageComponent } from './starwars/pages/home/home-page.component';
import { StarshipsPageComponent } from './starwars/pages/starships-page/starships-page.component';
import { StarshipCardPageComponent } from './starwars/pages/starship-card-page/starship-card-page.component';
// import { PublicGuard } from './auth/guards/public.guards';

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
        // Ya no se carga el componente, se carga el modulo mediante un dynamic import de js nativo
        // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'starships',
        component: StarshipsPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'starships/:id',
        component: StarshipCardPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        // canActivate: [ PublicGuard ],
        // canMatch: [ PublicGuard ]
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
