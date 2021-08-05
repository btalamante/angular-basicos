//Component HIJO de main-page.component


import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  constructor(private dbzService: DbzService) { }
  // No crea otra instancia del servicio ya que el padre "main-page.component.ts" inicializa el servicio
  // y al ser Singleton Angular únicamente lo inicializa una sola vez

  // @Input('data') personajes: Personaje[] = []; //Este input "personajes" vendran desde el componente padre y 'data' es el alias para personajes

  get personajes() {
    return this.dbzService.personajes; // este es el getter del servicio
  }

}
