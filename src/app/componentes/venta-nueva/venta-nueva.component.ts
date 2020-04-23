import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Venta } from 'src/app/clases/venta';
import * as $ from 'jquery'

@Component({
  selector: 'app-venta-nueva',
  templateUrl: './venta-nueva.component.html',
  styleUrls: ['./venta-nueva.component.css']
})
export class VentaNuevaComponent implements OnInit {
  @Output() output_altaVenta : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  idAut = 1;
  entidad = new Venta()

  ngOnInit(): void {
  }

  agregar(){
    $("#precio").removeClass('error')
    $("#tipo").removeClass('error')
    this.entidad.descripcion = $("#desc").val()
    this.entidad.tipo = $("#tipo").val()
    this.entidad.fechaDeVencimiento = $("#fecha").val()
    this.entidad.precio = parseInt( $("#precio").val())
    this.entidad.fechaDeVenta = $("#fechaVenta").val()
    this.entidad.cantidad = $("#cantidad").val()

    this.entidad.id = this.idAut;
    this.idAut++;
    this.entidad.rutaDeFoto = '../../assets/default.png'
    if(this.entidad.tipo == 'liquido' || this.entidad.tipo == 'solido'){
      if(this.entidad.precio >= 0 && this.entidad.precio <= 1000){
        this.output_altaVenta.emit(this.entidad);
      }
      else{
        $("#precio").addClass('error')
      }
    }
    else{
      $("#tipo").addClass('error')
    }
  }

}
