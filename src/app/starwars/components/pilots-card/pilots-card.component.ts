import { Component } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { Pilots } from '../../interfaces/pilots.interface';

@Component({
  selector: 'starwars-pilots-card',
  templateUrl: './pilots-card.component.html',
  styleUrls: ['./pilots-card.component.css']
})
export class PilotsCardComponent {
  public urlImg: string =
    'https://starwars-visualguide.com/assets/img/characters/';


  constructor(private starwarsService: StarwarsService) { }

  get infoPilots() {
    return this.starwarsService.infoPilots;
  }

  getPilotID(i: number) {
    const url = this.infoPilots[i].url;
    // console.log("URL desde componente", url)
    return this.starwarsService.getPilotID(url);
  }

}
