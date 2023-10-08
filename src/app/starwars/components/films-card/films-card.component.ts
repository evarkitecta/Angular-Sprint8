import { Component } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'starwars-films-card',
  templateUrl: './films-card.component.html',
  styleUrls: ['./films-card.component.css']
})
export class FilmsCardComponent {
  public urlImg: string =
    'https://starwars-visualguide.com/assets/img/films/';


  constructor(private starwarsService: StarwarsService) { }

  get infoFilms() {
    return this.starwarsService.infoFilms;
  }

  getFilmID(i: number) {
    const url = this.infoFilms[i].url;
    // console.log("URL desde componente", url)
    return this.starwarsService.getFilmsID(url);
  }
}
