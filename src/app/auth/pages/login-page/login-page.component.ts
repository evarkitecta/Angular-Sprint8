import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin(): void {

    this.authService.login('default@gmail.com','123456')
      .subscribe( user => {

        this.router.navigate(['/']);

      });

  }
}

