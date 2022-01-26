import { Component, OnInit } from '@angular/core';
import { FirstService } from './first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  frase: string[] = []

  constructor(private firstService: FirstService) {
    this.frase = this.firstService.getFrase()
  }

  ngOnInit(): void {
  }

}
