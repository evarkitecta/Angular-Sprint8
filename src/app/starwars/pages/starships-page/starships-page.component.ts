import { Component } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';


@Component({
  selector: 'starwars-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.css']
})
export class StarshipsPageComponent {


  constructor(private starwarsService: StarwarsService) {
    this.starwarsService.callAPI();
  }


}
