import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Starships, StarshipsResponse } from '../interfaces/starships.interface';
import { Pilots } from '../interfaces/pilots.interface';
import { Films } from '../interfaces/films.interface';


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

  private _pilots: string[] = [];
  public infoPilots: Pilots[] = [];
  private _films: string[] = [];
  public infoFilms: Films[] = [];

  constructor(private http: HttpClient) { }
  get starships() {
    return [...this._starships];
  }

  get starshipSelected() {
    return { ...this._starshipSelected };
  }
  get pilots() {
    return [...this._pilots];
  }

  callAPI(): void {
    if (this._starships.length !== 0) return
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
    // Vaciar naves guardadas anteriormente
    this.infoPilots = [];
    this.infoFilms = [];
    // Almaceno la nave seleccionada
    this._starshipSelected = this.starships[index];
    // Almaceno los pilotos de la nave seleccionada (las url como strings)
    this._films = this.starshipSelected.films;
    this._pilots = this.starshipSelected.pilots;
    // Envío el array de urls de pilotos para que se llame a la API de cada piloto y que me devuelva la información con la interface de pilotos
    this.callAPIFilms(this._films)
    this.callAPIPilots(this._pilots)
    console.log(this.pilots);
    console.log(this.infoFilms)
    this.urlImgStarship = this.getImageStarship(index);
    console.log("infoPilots", this.infoPilots);
    console.log("infoFilmss", this.infoFilms);
  }

  // PILOTOS
  callAPIPilots(arrayURL: string[]): void {
    arrayURL.forEach((url: string) => {
      this.http.get<Pilots>(url).subscribe(resp => {
        this.infoPilots.push(resp);
        console.log(this.infoPilots);

      });
    });
  }

  getPilotID(url: string): string {
    return url.replace(/[^0-9]+/g, '');

  }

  // FILMS

  callAPIFilms(arrayURL: string[]): void {
    arrayURL.forEach((url: string) => {
      this.http.get<Films>(url).subscribe(resp => {
        this.infoFilms.push(resp);
        console.log(this.infoFilms);

      });
    });
  }

  getFilmsID(url: string): string {
    return url.replace(/[^0-9]+/g, '');
  }

}
