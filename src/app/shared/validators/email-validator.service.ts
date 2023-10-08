import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {


  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
      console.log({ email });

      if (email === "eva@gmail.com") {
        subscriber.next({ emailTaken: true });
        // Con el .complete() se termina la petición se dessubcribe. No hace falta el return
        subscriber.complete();
        // return
      }

      //Si lo que la persona acaba de escribir no existe, no está tomado:
      subscriber.next(null);
      subscriber.complete();
    }).pipe(
      // Usamos el delay para simular una respuesta a una llamada a backend que puede tardar un poco
      delay(1000)
    );;

    return httpCallObservable;

  }

}
