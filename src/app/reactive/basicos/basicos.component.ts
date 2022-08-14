import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario:FormGroup = new FormGroup({
  //   nombre: new FormControl('Rtx 480 Ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });

  miFormulario:FormGroup = this._fb.group({
    nombre:[, [Validators.required, Validators.minLength(3)]],
    precio:[, [Validators.required, Validators.min(1)]],
    existencias:[, [Validators.required, Validators.min(0)]],
  });

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.patchValue({
      nombre:'Rtx 480 Ti',
      precio:1500
    });
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }

}
