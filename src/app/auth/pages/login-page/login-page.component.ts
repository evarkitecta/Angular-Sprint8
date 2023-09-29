import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observeOn } from 'rxjs';
import { ValidatorsService } from 'src/app/shared/service/validators.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(
    private authService: AuthService,
    private validatorsService: ValidatorsService,
    private router: Router,
    private fb: FormBuilder

  ) { }

  public submit: boolean = false;
  // FORMULARIO REACTIVO
  public loginForm: FormGroup = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })


  onSave(): void {
    // this.submit = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return
    }
    console.log(this.loginForm.value);
    this.loginForm.reset({ user: "", password: "" });
  }

  isValidField(field: string): boolean | null {
    const control = this.loginForm.controls[field];
    return control?.errors && control.touched
  }

  getFieldError(field: string): string | null {
    return this.validatorsService.getFieldError(this.loginForm, field)
  }
  // getFieldError(field: string): string | null {
  //   if (!this.loginForm.controls[field]) return null;
  //   const errors = this.loginForm.controls[field].errors || {};
  //   for (const key of Object.keys(errors)) {
  //     switch (key) {
  //       case "required": return "El campo es requerido";
  //       case "minlength": return `Minimo ${errors["minlength"].requiredLength} caracteres`;
  //     }
  //   }
  //   return null;
  // }
  // Check Login -> Service
  submitLogin() {
    this.submit = false;
    if (this.loginForm.status !== 'VALID') {
      this.submit = true;
      /*alert('Please, check the entered data');*/
    } else {
      this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      // this.loginModal.dismissAll();
    }
  }
  // protección de rutas Herrera
  onLogin(): void {

    this.authService.login('default@gmail.com', '123456')
      .subscribe(user => {

        this.router.navigate(['/']);

      });

  }
}

