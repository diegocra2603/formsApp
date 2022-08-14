import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre?: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego:string = '';

  persona: Persona = {
    nombre: 'Diego Cruz',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 1, nombre: 'Grand Theft Auto'},
    ]
  }

  @ViewChild('miFormulario') miFormulario!:NgForm;

  guardar(){

  }

  eliminar(index:number){
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(){
  
    if(this.nuevoJuego.trim().length < 1)
      return;

    const nuevoFavorito:Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});

    this.nuevoJuego = '';
    
  }

}
