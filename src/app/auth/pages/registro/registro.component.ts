import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this._fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this._vs.nombreApellidoPattern)]],
    email : ['', [Validators.required, Validators.pattern(this._vs.emailPattern)],[this._emailValidator]],
    username : ['', [Validators.required, this._vs.noPudeSerStrider]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    password2 : ['', [Validators.required, Validators.minLength(6)]],
  },{
    validators: [ this._vs.camposIguales('password', 'password2') ]
  });


  get emailErrorMsg ():string{
    const error = this.miFormulario.get('email')?.errors;
    if(error?.['required']){
      return 'El campo es obligatorio';
    } else if(error?.['pattern']){
      return 'El formato no es correcto';
    } else if(error?.['emailYaExiste']){
      return 'El email ya existe';
    }

    return '';
    
  }

  constructor(private _fb: FormBuilder,
              private _vs:ValidatorService,
              private _emailValidator:EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.patchValue({
      nombre: 'Diego Cruz',
      email: 'test1@test.com',
      username: 'diegocra',
      password: '123456',
      password2: '123456'
    });
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){

    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
