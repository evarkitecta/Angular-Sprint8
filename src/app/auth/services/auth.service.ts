import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environments } from 'src/environments/environments';
import { LoginRequest, User } from '../interfaces/user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of, tap, throwError } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthService implements OnInit {
  router: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

  }

  private users: User[] = [];

  private isUserLoggedIn: boolean = false;


  private userSesion: LoginRequest = {
    username: '',
    password: ''
  };
  login(user: LoginRequest): boolean {
    localStorage.removeItem("userSesion")
    console.log("Credenciales de usuario", user);
    const users: User[] = this.getFromLocalStorage();
    console.log(users);
    const isUserRegistered = users.find(u => u.username === user.username && u.password === user.password);
    console.log(" Usuario logado", isUserRegistered)
    if (isUserRegistered) {
      this.isUserLoggedIn = true;
      localStorage.setItem('userSesion', JSON.stringify(this.isUserLoggedIn));
      return true;
    } else {
      return false;
    }

  }

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


  public saveToLocalStorage(user: User) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }



  public getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('users')!);
  }




}
