import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { ClassbindingComponent } from '../classbinding/classbinding.component';
import { PropertybindingComponent } from '../propertybinding/propertybinding.component';

@NgModule({
  declarations: [
    FirstComponent,
    ClassbindingComponent,
    PropertybindingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FirstComponent
  ]
})
export class FirstModule { }
