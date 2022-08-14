import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm = {
    producto: 'RTX 480 TI',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('Posteo Correcto');
    this.miFormulario.resetForm(
      {
        producto: 'Sin nombre',
        precio: 0,
        existencias: 0
      }
    );
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid &&
    this.miFormulario?.controls['producto']?.touched
  }

  precioValido():boolean{
    return this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value < 0

  }

}
