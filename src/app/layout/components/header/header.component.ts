import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isUserLoggedIn: boolean = false;
  public currentUser = this.authService.userLoggedIn
  public userNameLogged = this.currentUser.username

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe((isLoggedIn: boolean) => {
      this.isUserLoggedIn = isLoggedIn;
      this.currentUser = this.authService.userLoggedIn;
      this.userNameLogged = this.currentUser?.username;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
