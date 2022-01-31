import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.scss']
})
export class TwowaydatabindingComponent implements OnInit {

  pessoa: any = {
    nome: 'John',
    idade: '30'
  }

  teste: string = 'olá'

  constructor() { }

  ngOnInit(): void {
  }

}
