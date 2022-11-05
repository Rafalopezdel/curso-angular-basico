import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{titulo}} </h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <!-- <button (click)="numero = numero + 1">+ 1</button> -->
        <button (click)="acumulador(base)">+ {{base}}</button>

        <span>{{numero}}</span>

        <!-- <button (click)="numero = numero - 1">- 1</button> -->
        <button (click)="acumulador(-base)">- {{base}}</button>
    
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador app';
    numero: number = 10;
    base: number = 5;

    // sumar (){
    //   this.numero += 1;
    // }

    // restar(){
    //   this.numero -= 1;
    // }

    acumulador(valor: number) {
        this.numero += valor;
    }

}