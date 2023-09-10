import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    StarshipsPageComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StarwarsModule { }
