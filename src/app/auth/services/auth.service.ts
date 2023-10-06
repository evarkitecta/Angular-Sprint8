import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of, tap, throwError } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthService {
  router: any;

  constructor(private http: HttpClient) { }

  private users: User[] = [

  ]

  login(user: User) {

  }

  // saveNewUser(user: User) {
  //   // Faltarían las validaciones de si ya existe el mail o el usuario en la base de datos lanzar un error y marcar en rojo los campos.
  //   this.saveToLocalStorage(user);

  // }

  saveNewUser(user: User): boolean {
    const users: User[] = this.getFromLocalStorage();
    const isUserRegistered = users.some(u => u.username === user.username);
    const isEmailRegistered = users.some(u => u.email === user.email);

    if (isUserRegistered || isEmailRegistered) {
      // Mostrar el error de "Usuario y/o Email registrados"

      return true;

    } else {
      // Guardar el nuevo usuario en el localStorage
      this.saveToLocalStorage(user);
      return false;
    }
  }

  // saveNewUser(user: User) {
  //   const users: User[] = this.getFromLocalStorage();

  //   // Verificar si el usuario o el email ya están registrados
  //   const isUserRegistered = users.some(u => u.username === user.username);
  //   const isEmailRegistered = users.some(u => u.email === user.email);

  //   if (isUserRegistered || isEmailRegistered) {
  //     // Mostrar el error de "Usuario y/o Email registrados"
  //     alert("Usuario y/o Email registrados");
  //   } else {
  //     // Guardar el nuevo usuario en el localStorage
  //     users.push(user);
  //     localStorage.setItem('users', JSON.stringify(users));

  //   }
  // }

  public saveToLocalStorage(user: User) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }



  public getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('users')!);
  }




}
