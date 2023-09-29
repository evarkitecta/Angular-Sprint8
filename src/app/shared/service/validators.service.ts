import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
//Para detectar variables de formulario que no son los habituales como required
// export const NO_STRIDER_ERROR = "noStrider";
// export const NAME_SURNAME_ERROR = "firstNameAndLastnamePattern";
// export const EMAIL_PATTERN_ERROR = "emailPattern";

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  //Creación de un objeto de control de errores personalizado
  public cantBeStrider = (control: FormControl): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return {
        // Creamos un objeto de errores con la propiedad noStrider
        noStrider: true,
      }
    }

    return null;
  }

  public nameAndSurname = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();
    if (!value.match(this.firstNameAndLastnamePattern)) {
      return {
        nameAndSurname: true,
      }
    }
    return null;
  }

  public isValidField(form: FormGroup, field: string): boolean | null {
    const control = form.controls[field];
    return control.errors && control.touched
  }

  public getFieldError(form: FormGroup, field: string): string | null {
    if (!form.controls[field]) return null;
    const errors = form.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case "required": return "El campo es requerido";
        case "minlength": return `Mínimo ${errors["minlength"].requiredLength} caracteres`;
        // Para formulario de registro (noStrider viene del método CantBeStrider)
        case "noStrider": return "El usuario ya existe";
        case "notEqual": return "Las contraseñas no coinciden";
        case "emailTaken": return "Email ya registrado";
        case "pattern": return "Email no válido";
        case "nameAndSurname": return "Nombre de usuario no válido. Introduce un nombre y apellido separados por un espacio";
        // case "pattern":
        //   if (key !== this.emailPattern) {
        //     return "Email no válido";
        //   }
      }
      // *Probar el validador del firstName con una función como la del noStrider.
    }
    // if (key === this.emailPattern) {
    //   return "Email no válido";
    // }
    // if (this.firstNameAndLastnamePattern) {
    //   return "Nombre de usuario no válido";
    // }
    return null;
  }

  public isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      // Si las contraseñas coinciden, limpio error
      formGroup.get(field2)?.setErrors(null);
      return null
    }
  }
}
