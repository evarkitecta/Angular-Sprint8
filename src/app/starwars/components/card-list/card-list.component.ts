import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Starships } from '../../interfaces/starships.interfaces';


@Component({
  selector: 'starwars-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input()
  public starships: Starships[] = [];
  // @Output()
  // public starshipToShow: EventEmitter<Starships> = new EventEmitter();
  // public starshipID!: number;
  constructor(private router: Router) { }
  getImageStarship(index: number): string {
    const id = this.getStarshipID(index);
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  }

  // catchStarship(starship: Starships): void {
  //   this.starshipToShow.emit(starship)
  // }

  getStarshipID(index: number): string {
    return this.starships[index].url.replace(/[^0-9]+/g, '');

  }
  showStarship(index: number): void {
    const id = this.getStarshipID(index);
    this.router.navigateByUrl(`/starships/${id}`);
  }

  // getID(index: number): string {

  // }


}
