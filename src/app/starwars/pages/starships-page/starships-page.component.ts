import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { Starships, StarshipsResponse } from '../../interfaces/starships.interfaces';

@Component({
  selector: 'starwars-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.css']
})
export class StarshipsPageComponent implements OnInit {

  ngOnInit(): void {
    this.starwarsService.callAPI();
  }
  constructor(private starwarsService: StarwarsService) {

  }

  get starships(): Starships[] {
    return this.starwarsService.starships;
  }

  // rootToShowStarship(starship: Starships): void {

  // }

}
