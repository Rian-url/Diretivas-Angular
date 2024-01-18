import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  dolphin:string[] = []
  menuType:string = 'dev'

  constructor(){
    this.dolphin = [
      "Carga rápida",
      "Autonomia PBEV",
      "Linha Ocean"
    ]
  }

  adicionar(){
    this.dolphin.push("Vou ter esse carro")
  }

}
