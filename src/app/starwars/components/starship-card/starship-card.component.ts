import { Component } from '@angular/core';
import { Starships } from '../../interfaces/starships.interface';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'starwars-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.css']
})
export class StarshipCardComponent {

  constructor(private starwarsService: StarwarsService) {
  }

  get starshipSelected(): Starships {
    return this.starwarsService.starshipSelected
  }

  get urlImgStarship(): string {
    return this.starwarsService.urlImgStarship
  }

}
