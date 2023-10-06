import { Injectable, OnInit } from '@angular/core';
import { LoginRequest, User } from '../interfaces/user.interface';



@Injectable({ providedIn: 'root' })
export class AuthService {

  private _isUserLoggedIn: boolean = false;

  get isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  login(user: LoginRequest): boolean {
    localStorage.removeItem("userSesion")
    console.log("Credenciales de usuario", user);
    const users: User[] = this.getFromLocalStorage();
    console.log(users);
    const isUserRegistered = users.find(u => u.username === user.username && u.password === user.password);
    console.log(" Usuario logado", isUserRegistered)
    if (isUserRegistered) {
      this._isUserLoggedIn = true;
      localStorage.setItem('userSesion', JSON.stringify(this.isUserLoggedIn));
      return true;
    } else {
      return false;
    }

  }

  saveNewUser(user: User): boolean {
    const users: User[] = this.getFromLocalStorage();
    // comprobar si no existe ya el usuario en el localStorage (substituye a base de datos de backend)
    const isUserRegistered = users.some(u => u.username === user.username);
    const isEmailRegistered = users.some(u => u.email === user.email);

    if (isUserRegistered || isEmailRegistered) {
      // Si está registrado el usuario devolvemos true
      return true;

    } else {
      // Si no existe en la base de datos: Guardar nuevo usuario en el localStorage
      this.saveToLocalStorage(user);
      return false;
    }
  }

  // Guardar los datos en el local storage para crear una base de datos de usuarios registrados (sustituye a base de datos de backend)
  public saveToLocalStorage(user: User) {
    // Primero recogemos los datos del localStorage para tener un array de objetos al que empujar el nuevo usuario y después guardarlo
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Recoger los datos del local storage para crear una base de datos de usuarios registrados (sustituye a base de datos de backend)
  public getFromLocalStorage() {
    // Convertimos datos del local storage que vienen como string y los convertimos a objeto JSON
    return JSON.parse(localStorage.getItem('users')!);
  }

}
