import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

flores: string[] = ['rosas','margaritas','claveles','girasol','amapola','Dalia'];
  Florborrado: string = '';

borrarFlores(){
  console.log('borrando...');
  this.Florborrado=this.flores.shift() || '';
}


}



