import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {


  eventos:Evento[] = [
    {
      nombre: "Connferencia angular",
      ciudad: 'Bogota',
      descripcion: "Angular 7"
    },
    {
      nombre: "Connferencia react",
      ciudad: 'Bogota',
      descripcion: "Angular vs Reac"
    },
    {
      nombre: "Connferencia ionic",
      ciudad: 'Bogota',
      descripcion: "Componentes web en ionic"
    }
    ,
    {
      nombre: "ionic vs flutter",
      ciudad: 'Bogota',
      descripcion: "hibrido vs Nativo"
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  manejarClick(){
    console.log("Click btn");
  }
}
