import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-star-wars';
  constructor() {
    this.deleteLocalStorage()
  }



  deleteLocalStorage() {
    localStorage.removeItem("userSesion")
  }
}
