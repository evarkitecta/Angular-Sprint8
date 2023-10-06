import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observeOn } from 'rxjs';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
// import { User } from '../../interfaces/user.interface';

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
    this.loginForm.reset();
  }

  isValidField(field: string): boolean | null {
    const control = this.loginForm.controls[field];
    return control?.errors && control.touched
  }

  getFieldError(field: string): string | null {
    return this.validatorsService.getFieldError(this.loginForm, field)
  }

  onLogin() {

  }
}

