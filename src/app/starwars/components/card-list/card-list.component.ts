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

}
