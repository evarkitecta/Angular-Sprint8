import { Component, Input } from '@angular/core';
import { Starships } from '../../interfaces/starships.interfaces';

@Component({
  selector: 'starwars-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.css']
})
export class StarshipCardComponent {

  @Input()
  public starships: Starships[] = [];

}
