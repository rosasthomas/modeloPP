import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Venta } from 'src/app/clases/venta';

@Component({
  selector: 'app-venta-listado',
  templateUrl: './venta-listado.component.html',
  styleUrls: ['./venta-listado.component.css']
})
export class VentaListadoComponent implements OnInit {
  @Input() input_listadoVenta:Venta[];
  @Output() output_listadoVenta: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ventaParaBorrar(venta: Venta){
    this.output_listadoVenta.emit(venta);
  }
}
