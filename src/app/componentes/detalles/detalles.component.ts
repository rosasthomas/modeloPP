import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entidad } from 'src/app/clases/entidad';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  @Input() input_detalles:Entidad;

  constructor() { }

  ngOnInit(): void {
  }

  limpiar(){
    this.input_detalles = null;
  }
}
