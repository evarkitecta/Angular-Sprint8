import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';
// import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ) { }

  // FORMULARIO REACTIVO
  public registerForm: FormGroup = this.fb.group({
    // name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    name: ['', [Validators.required, this.validatorsService.nameAndSurname]],
    // email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidator()]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],

    username: ['', [Validators.required, Validators.minLength(3), this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
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
    this.registerForm.markAllAsTouched();
  }
}
