import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { EventoService } from './evento.service';
import { Evento } from './models/evento';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavegacionComponent,
    ListaEventosComponent,
    DetalleEventoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    EventoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
