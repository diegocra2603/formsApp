import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  constructor() { }

  validCampo(form:FormGroup,campo:string):boolean{
    return form.controls[campo].invalid && form.controls[campo].touched;
  }

}
