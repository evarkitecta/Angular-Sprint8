import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-star-wars';
  constructor() {
    this.resetLocalStorage()
  }

  resetLocalStorage() {
    const userSesion = false;
    localStorage.setItem("userSesion", JSON.stringify(userSesion))
  }
}
