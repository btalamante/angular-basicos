import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor() { }

  // get personajes(): Personaje[] {
  //   //Getter para obtener el arreglo de personajes que existe en el servicio
  //   // la propiedad dbzSercice está inicializada/creada dentro del constructor de la clase
  //   return this.dbzService.personajes;
  // }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   //debugger; //Es como poner un breakpoint dentro de chrome para pausar la ejecución del programa
  //   this.personajes.push(argumento); //Agregamos al arreglo los datos enviados por el hijo
  // }

  // constructor(private dbzService: DbzService) {
  //   // Inyección de dependencias, estamos inyectando el servicio en el constructor de la clase, a su
  //   // vez se crea la propiedad "dbzService"
  //   //this.personajes = this.dbzService.personajes; //Con la dependencia inyectada asignamos el valor a la propiedad de esta clase
  // }



}
