import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {

  estilo: String = "disable"
  item : String = ""
  lista : String[] = []

  constructor(){}

  adicionarLista(){
    this.lista.push(this.item)
  }


}
