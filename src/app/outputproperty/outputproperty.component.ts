import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './outputproperty.component.html',
  styleUrls: ['./outputproperty.component.scss'],
})
export class OutputpropertyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() {}

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  ngOnInit(): void {}
}
