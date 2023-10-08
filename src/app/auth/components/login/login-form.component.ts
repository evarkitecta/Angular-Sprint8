import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(
    private authService: AuthService,
    private validatorsService: ValidatorsService,
    private router: Router,
    private fb: FormBuilder

  ) { localStorage.removeItem('userLoggedIn'); }


  public loginError: string = "";
  public submit: boolean = false;
  // FORMULARIO REACTIVO
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })


  onLogin() {
    if (this.loginForm.valid) {
      const isUserRegistered = this.authService.login(this.loginForm.value);
      console.log(isUserRegistered)
      if (isUserRegistered) {
        this.router.navigateByUrl("/starships");
        this.loginForm.reset();
      }
    } else {
      this.loginError = "Error: usuario y/o password no válidos";

      this.loginForm.markAllAsTouched();
    }
  }

  isValidField(field: string): boolean | null {
    const control = this.loginForm.controls[field];
    return control?.errors && control.touched
  }

  getFieldError(field: string): string | null {
    return this.validatorsService.getFieldError(this.loginForm, field)
  }


}

