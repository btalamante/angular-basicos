import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable() //Decorador para indicar que la clase es un servicio y permitirá inyectarlo en las clases donde necesitemos usarlo
export class DbzService {

    private _personajes: Personaje[] = [ //El "_" indica que es propiedad privada
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
        //[...this.personajes] es un arreglo los "..." 
        //es el operador Spread https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        // separa los elementos independientes del arreglo y se crea otro
        // esto se hace para romper la referencia a la propiedad privada _personajes buena practica


    }

    constructor() { }

    agregarPersonaje(data: Personaje) {
        this._personajes.push(data);
    }

}

