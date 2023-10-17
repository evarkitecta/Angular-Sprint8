import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { User } from 'src/app/auth/interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // *Creación de objetos de control de errores personalizados
  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    if (control.value === null || control.value === undefined) {
      return null;
    }
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
    if (control.value === null || control.value === undefined) {
      return null;
    }
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

  public isUserRegistered(user: User, key: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem(key) || '[]');
    return users.some(u => u.username === user.username && u.password === user.password);
  }

  //* Creación de mensajes de error
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
        // case "userNotRegistered": return "Usuario no válido";
      }

    }

    return null;
  }
}
