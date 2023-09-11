import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { StarshipCardPageComponent } from './pages/starship-card-page/starship-card-page.component';
import { StarshipCardComponent } from './components/starship-card/starship-card.component';
import { FilmsCardComponent } from './components/films-card/films-card.component';
import { PilotsCardComponent } from './components/pilots-card/pilots-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    StarshipsPageComponent,
    CardListComponent,
    StarshipCardPageComponent,
    StarshipCardComponent,
    FilmsCardComponent,
    PilotsCardComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class StarwarsModule { }
