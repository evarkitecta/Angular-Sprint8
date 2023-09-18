import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Starships, StarshipsResponse } from '../interfaces/starships.interfaces';

@Injectable({
  // El root hace que no tengamos que importarlo en el providers del módulo
  providedIn: 'root'
})
export class StarwarsService {
  private _starships: Starships[] = [];
  private _starshipSelected!: Starships;
  public urlImgStarship!: string;
  public starshipID!: string;

  public maxPages: number = 4;
  public page: number = 1;


  // private firstCallAPI: boolean = false;
  constructor(private http: HttpClient) { }
  get starships() {
    return [...this._starships];
  }

  get starshipSelected() {
    return { ...this._starshipSelected };
  }

callAPI(): void {
  if (this._starships.length!==0) return
this.callAPIStarships()
}

  callAPIStarships(): void {
    if (this.page > this.maxPages) return
    this.http
      .get<StarshipsResponse>(`https://swapi.dev/api/starships/?page=${this.page}`)
      .subscribe(resp => {
        this._starships.push(...resp.results);
        this.page++

      })
  }

  getImageStarship(index: number): string {
    this.starshipID = this.getID(index);
    return `https://starwars-visualguide.com/assets/img/starships/${this.starshipID}.jpg`;
  }

  getID(index: number): string {
    return this.starships[index].url.replace(/[^0-9]+/g, '');
  }

  selectedStarship(index: number): void {
    this._starshipSelected = this.starships[index];
    this.urlImgStarship = this.getImageStarship(index);
  }

  // Exercici 3: Scroll




}
