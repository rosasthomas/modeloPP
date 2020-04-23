import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entidad } from 'src/app/clases/entidad';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {
  @Output() output_btnBorrar : EventEmitter<any> = new EventEmitter<any>();
  @Input() input_btnBorrar_entidad:Entidad;
  constructor() { }

  ngOnInit(): void {
  }

  botonBorrar(){
    this.output_btnBorrar.emit(this.input_btnBorrar_entidad); 
  }
}
