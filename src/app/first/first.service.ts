import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  getFrase(): string[] {
    return ["Esse","é","um","teste"]
  }

  constructor() { }
}
