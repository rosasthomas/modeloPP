import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { Entidad } from 'src/app/clases/entidad';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  @Input() input_buscar : Entidad[];
  @Output() output_buscar : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    let descripcion = $("#inp_buscar").val();
    for (let entidad of this.input_buscar) {
      if(descripcion == entidad.descripcion){
        this.output_buscar.emit(entidad);
        break;
      }
    }
  }
}
