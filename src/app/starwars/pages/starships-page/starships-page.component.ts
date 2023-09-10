import { Component } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { Starships, StarshipsResponse } from '../../interfaces/starships.interfaces';

@Component({
  selector: 'app-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.css']
})
export class StarshipsPageComponent {

  constructor(private starwarsService: StarwarsService) {
    this.starwarsService.callAPIStarships();
  }
  get starships(): Starships[] {
    return this.starwarsService.starships;
  }

  public starshipsPage: Starships[] = this.starships;

}
