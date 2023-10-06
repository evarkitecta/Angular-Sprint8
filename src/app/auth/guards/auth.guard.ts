import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from '@angular/router';

import { AuthService } from '../services/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isUserLoggedIn) {
      return true;
    }
    // Redirigir al usuario a la página de inicio de sesión si no está autenticado
    this.router.navigate(['auth/login']);
    return false;

  }


}

