import { Component, OnInit } from '@angular/core';
import { FirstService } from './first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  imgUrl: string
  frase: string[] = []
  valor1: boolean = false
  valor2: boolean = true
  valorInicial: number = 10;

  constructor(private firstService: FirstService) {
    this.frase = this.firstService.getFrase()
    this.imgUrl = this.firstService.imgUrl
  }

  onMudouValor(evento: any){
    console.log(evento)
  }

  ngOnInit(): void {
  }

}
