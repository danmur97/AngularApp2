import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent implements OnInit {
  @Input() evento:Evento
  constructor() { }

  ngOnInit() {
  }

}
