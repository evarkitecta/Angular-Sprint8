import { Injectable } from '@angular/core';
import { LoginRequest, User } from '../interfaces/user.interface';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _userLoggedIn: LoginRequest = {
    username: "",
    password: ""
  };

  get isUserLoggedIn(): Observable<boolean> {
    return this._isUserLoggedIn.asObservable();
  }

  login(user: LoginRequest): boolean {
    localStorage.removeItem("userSesion");
    console.log("Credenciales de usuario", user);
    const users: User[] = this.getFromLocalStorage();
    console.log(users);
    const isUserRegistered = users.find(u => u.username === user.username && u.password === user.password);
    console.log(" Usuario logueado", isUserRegistered)
    if (isUserRegistered) {
      this._userLoggedIn = isUserRegistered;
      localStorage.setItem('userLoggedIn', JSON.stringify(this.userLoggedIn));
      this._isUserLoggedIn.next(true);
      console.log("userLoggedIn", this._userLoggedIn);
      localStorage.setItem('userSesion', JSON.stringify(true));
      return true;
    } else {

      return false;
    }
  }

  get userLoggedIn(): LoginRequest {
    return this._userLoggedIn;
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

  public checkUser(user: User) {

  }

  logout(): void {
    this._isUserLoggedIn.next(false);
    // localStorage.setItem('userSesion', JSON.stringify(false));
    localStorage.removeItem("userSesion");
    localStorage.removeItem('userLoggedIn');

  }
}
