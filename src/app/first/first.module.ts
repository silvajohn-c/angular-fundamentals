import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { ClassbindingComponent } from '../classbinding/classbinding.component';
import { PropertybindingComponent } from '../propertybinding/propertybinding.component';
import { EventbindingComponent } from '../eventbinding/eventbinding.component';

@NgModule({
  declarations: [
    FirstComponent,
    ClassbindingComponent,
    PropertybindingComponent,
    EventbindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FirstComponent
  ]
})
export class FirstModule { }
