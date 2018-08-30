import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  obtenerDatos():any{
    return [
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
  }
  constructor() { }
}
