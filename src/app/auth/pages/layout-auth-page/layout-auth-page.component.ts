import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-layout-auth-page',
  templateUrl: './layout-auth-page.component.html',
  styleUrls: ['./layout-auth-page.component.css']
})
export class LayoutAuthPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }


  // get user(): User | undefined {
  //   return this.authService.currentUSer;
  // }

  // onLogout() {
  //   this.authService.logout();
  //   this.router.navigate(['./auth/login']);
  // }

}
