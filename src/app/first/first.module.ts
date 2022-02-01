import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { ClassbindingComponent } from '../classbinding/classbinding.component';
import { PropertybindingComponent } from '../propertybinding/propertybinding.component';
import { EventbindingComponent } from '../eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from '../twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { OutputpropertyComponent } from '../outputproperty/outputproperty.component';

@NgModule({
  declarations: [
    FirstComponent,
    ClassbindingComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    OutputpropertyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FirstComponent
  ]
})
export class FirstModule { }
