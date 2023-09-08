import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    StarshipsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StarwarsModule { }
