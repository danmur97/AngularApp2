import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavegacionComponent,
    ListaEventosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
