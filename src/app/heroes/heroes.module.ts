
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        //declara que componentes cuenta el módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        //¿Qué cosas quiero hacer publicas de este modulo?
        ListadoComponent
    ],
    imports: [
        //Solamente van módulos para ser usados
        CommonModule
    ]

})
export class HeroesModule {

}



