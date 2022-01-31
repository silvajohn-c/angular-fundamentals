import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss'],
})
export class EventbindingComponent implements OnInit {
  valorDigitado: string;
  mouseOver: boolean = false;

  constructor() {
    this.valorDigitado = '';
  }

  ngOnInit(): void {}

  btnClicado() {
    alert('Botão clicado');
  }

  getEvento(evento: KeyboardEvent) {
    this.valorDigitado = (<HTMLInputElement>evento.target).value
  }

  onMouseOverOut(){
    this.mouseOver = !this.mouseOver
  }

}
