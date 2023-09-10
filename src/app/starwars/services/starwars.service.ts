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

  constructor(private http: HttpClient) { }
  get starships() {
    return [...this._starships];
  }
  callAPIStarships(): void {
    this.http
      .get<StarshipsResponse>(`https://swapi.dev/api/starships`)
      .subscribe(resp => {
        this._starships.push(...resp.results);
        console.log(resp.results)
      })
  }
}
