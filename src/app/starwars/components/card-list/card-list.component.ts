import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Starships } from '../../interfaces/starships.interfaces';
import { StarwarsService } from '../../services/starwars.service';


@Component({
  selector: 'starwars-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  constructor(
    private starwarsService: StarwarsService,
    private router: Router) { }

  // Llamamos a las starships a través del método get
  get starships(): Starships[] {
    return this.starwarsService.starships;
  }
  getImageStarship(index: number): string {
    const imgStarship = this.starwarsService.getImageStarship(index);
    return imgStarship
  }

  showCardStarship(index: number): void {
    const id = this.starwarsService.getID(index);
    this.starwarsService.selectedStarship(index);

    this.router.navigateByUrl(`/starships/${id}`);
  }

}
