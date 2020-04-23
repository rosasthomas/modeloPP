import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entidad } from 'src/app/clases/entidad';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {
  @Input() input_listado:Entidad[];
  @Output() output_listado: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  entidadParaBorrar(entidad: Entidad){
    this.output_listado.emit(entidad);
  }
}
