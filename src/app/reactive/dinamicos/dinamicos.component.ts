import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ReactiveService } from '../reactive.service';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this._fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this._fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ], Validators.required),
  });

  nuevoFavorito: FormControl = this._fb.control('', Validators.required);

  get validCampo() {
    return this._reactiveService.validCampo;
  }

  get favoritos() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private _fb: FormBuilder,
    private _reactiveService: ReactiveService) { }

  ngOnInit(): void {
  }

  agregar(): void {
    if (this.nuevoFavorito.invalid)
      return;

    this.favoritos.push(this._fb.control(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();

  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();

  }

  borrar(i: number) {
    this.favoritos.removeAt(i);

  }


}
