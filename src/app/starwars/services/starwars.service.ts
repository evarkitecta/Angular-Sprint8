import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Starships, StarshipsResponse } from '../interfaces/starships.interfaces';

@Injectable({
  // El root hace que no tengamos que importarlo en el providers del módulo
  providedIn: 'root'
})
export class StarwarsService {
  private _starships: Starships[] = [];
  public page: number = 1;
  // private firstCallAPI: boolean = false;
  constructor(private http: HttpClient) { }
  get starships() {
    return [...this._starships];
  }
  callAPI(): void {
    if (this._starships.length !== 0) return
    this.callAPIStarships();
    // this.firstCallAPI = true;

  }
  private callAPIStarships(): void {
    this.http
      .get<StarshipsResponse>(`https://swapi.dev/api/starships`)
      .subscribe(resp => {
        this._starships.push(...resp.results);
        // resp.results[i].url
        console.log(resp.results)
      })
  }

  cogerImagen() {
    this._starships
  }

  // getIDStarships(id: number): string {

  //   return starship[0].url
  // }
  getImageStarship(starship: string): string {
    return `https://starwars-visualguide.com/assets/img/starships/${starship}.jpg`
  }



}
