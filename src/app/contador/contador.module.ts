import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [
        //declara que componentes cuenta el módulo
        ContadorComponent
    ],
    exports: [
        //¿Qué cosas quiero hacer publicas de este modulo?
        ContadorComponent
    ],
    imports: [
        //Solamente van módulos para ser usados
        CommonModule
    ]

})
export class ContadorModule {

}
