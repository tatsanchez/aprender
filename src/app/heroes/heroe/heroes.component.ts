import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroes.component.html'
})
export class HeroeComponent{
nombre:string='Iroman';
edad:number = 45

get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
}

obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
}

// crear un metodo
cambiarNombre():void{
this.nombre ='Spiderman';
}
cambiarEdad():void{
    console.log('holiss...')
    this.edad = 30;
}
}
