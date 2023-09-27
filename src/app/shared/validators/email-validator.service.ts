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
      delay(3000)
    );;

    return httpCallObservable;

  }



  // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({ email })
  //   return of({
  //     emailTaken: true
  //   }).pipe(delay(2000))
  // }

  // return this.http.get<any[]>(`http://localhost:3000/users?email=${email}`)
  // .pipe(
  //   map(resp=>{
  //   return (resp.length === 0) ? null : { emailTaken: true }
  // }));

}
