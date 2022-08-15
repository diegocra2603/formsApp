import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private _http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    return this._http.get<any>(`http://localhost:3000/usuarios?q=${control.value}`).pipe(
    // delay(3000),  
    map(resp => {
        return (resp.length === 0) ? null : { emailYaExiste: true };
      })
    );

    return of(null);
  }

}
