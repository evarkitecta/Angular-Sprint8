import { Component } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'starwars-starship-card-page',
  templateUrl: './starship-card-page.component.html',
  styleUrls: ['./starship-card-page.component.css']
})
export class StarshipCardPageComponent {

  constructor(private starwarsService: StarwarsService) {
    // this.starwarsService.callAPI();
  }

}
