import { Component, Input } from '@angular/core';
import { Starships } from '../../interfaces/starships.interfaces';

@Component({
  selector: 'starwars-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input()
  public starships: Starships[] = [];
  // public starshipID!: number;
  constructor() { }
  getImageStarship(index: number): string {
    const starshipID = this.starships[index].url.replace(/[^0-9]+/g, '');
    return `https://starwars-visualguide.com/assets/img/starships/${starshipID}.jpg`
  }

}
