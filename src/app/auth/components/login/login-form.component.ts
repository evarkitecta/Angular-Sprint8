import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observeOn } from 'rxjs';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { LoginRequest } from '../../interfaces/user.interface';
import { User } from '../../interfaces/user.interface';

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

  ) { }
  public loginError: string = "";
  public submit: boolean = false;
  // FORMULARIO REACTIVO
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })


  // onLogin(): void {
  //   // this.submit = true;
  //   if (this.loginForm.invalid) {
  //     this.authService.login(this.loginForm.value as LoginRequest).subscribe()
  //     this.loginForm.markAllAsTouched();
  //     return
  //   }
  //   console.log(this.loginForm.value);
  //   this.loginForm.reset();
  // }
  onLogin() {
    if (this.loginForm.valid) {
      const isUserRegistered = this.authService.login(this.loginForm.value);
      if (isUserRegistered) {
        // alert(`Bienvenido ${userloged.name} a Star Wars Fake Web`);
        this.router.navigateByUrl("/starships");
        this.loginForm.reset();
      } else {
        this.loginForm.markAllAsTouched();
        alert("Error al ingresar los datos");
      }
    }

  }

  // onLogin2() {
  //   // this.submit = true;
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value as LoginRequest).subscribe(
  //       {
  //         next: (userData: any) => {
  //           console.log(userData);
  //         },
  //         error: (errorData: string) => {
  //           console.error(errorData);
  //           this.loginError = errorData;
  //         },
  //         complete: () => {
  //           console.info("Login Completado");
  //           this.router.navigateByUrl("/starships");
  //           this.loginForm.reset();
  //         }
  //       }
  //     )

  //   } else {
  //     this.loginForm.markAsTouched();
  //     return
  //   }


  // }
  isValidField(field: string): boolean | null {
    const control = this.loginForm.controls[field];
    return control?.errors && control.touched
  }

  getFieldError(field: string): string | null {
    return this.validatorsService.getFieldError(this.loginForm, field)
  }


}

