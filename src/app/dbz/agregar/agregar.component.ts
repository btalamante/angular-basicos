import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface'
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) { }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); //Declaración del EventEmitter para enviar datos al Padre

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    //console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo); //Le enviamos datos al padre con el EventEmitter

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}


