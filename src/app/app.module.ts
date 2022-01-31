import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
@NgModule({
  declarations: [
    AppComponent,
    TwowaydatabindingComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
