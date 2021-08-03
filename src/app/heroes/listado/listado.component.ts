import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitán América'];

  nombreHeroeBorrado: string = "";

  get getheroeBorrado(): string {
    return this.nombreHeroeBorrado;
  }

  borrarHeroe() {
    console.log("borrando");
    this.nombreHeroeBorrado = this.heroes.shift() || '';
  }
}
