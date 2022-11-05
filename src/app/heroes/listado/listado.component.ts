import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';   // es como ejemplo para remover un elemento de la matriz
                         // si esto es undefined entonces retornar string vacio
  }

  
}
