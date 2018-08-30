import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {
  eventos:Evento[] = [];
  constructor(private servicioEvento:EventoService) { 
    this.eventos = servicioEvento.obtenerDatos();
  }

  ngOnInit() {
  }
  manejarClick(){
    console.log("Click btn");
  }
}
