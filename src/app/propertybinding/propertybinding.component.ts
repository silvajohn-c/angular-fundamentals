import { Component, OnInit } from '@angular/core';
import { PropertybindingService } from './propertybinding.service';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.scss']
})
export class PropertybindingComponent implements OnInit {
  imgUrl: string
  frase: string[] = []
  valor1: boolean = false
  valor2: boolean = true

  constructor(private propertybindingService: PropertybindingService) {
    this.frase = this.propertybindingService.getFrase()
    this.imgUrl = this.propertybindingService.imgUrl
  }

  ngOnInit(): void {
  }

}
