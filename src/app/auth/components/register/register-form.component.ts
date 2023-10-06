import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator,
    private authService: AuthService,
    private router: Router
  ) { }

  // FORMULARIO REACTIVO
  public registerForm: FormGroup = this.fb.group({
    // name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    name: ['', [Validators.required, this.validatorsService.nameAndSurname]],
    // email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidator()]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],

    username: ['', [Validators.required, Validators.minLength(3), this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required]],
  },
    {
      validators: [this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')]
    }
  )

  // LLAMAR A SERVICIO PARA VALIDAR LOS CAMPOS
  isValidField(field: string) {
    return this.validatorsService.isValidField(this.registerForm, field);
  }
  getFieldError(field: string): string | null {
    return this.validatorsService.getFieldError(this.registerForm, field)
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const isUserRegistered = this.authService.saveNewUser(this.registerForm.value as User);
      if (isUserRegistered) {
        // Usuario registrado
        alert("Usuario y/o Email registrados. Introduce un nuevo usuario y/o email");
      } else {
        // Usuario no registrado, redirigir y resetear formulario
        this.router.navigateByUrl("/auth/login");
        this.registerForm.reset();
      }
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
