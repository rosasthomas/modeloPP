import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entidad } from 'src/app/clases/entidad';
import * as $ from 'jquery'

@Component({
  selector: 'app-alta-prod',
  templateUrl: './alta-prod.component.html',
  styleUrls: ['./alta-prod.component.css']
})
export class AltaProdComponent implements OnInit {
  @Output() output_altaProd : EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }
  idAut = 4;
  entidad = new Entidad()


  ngOnInit(): void {
  }

  agregar(){
    $("#precio").removeClass('error')
    $("#tipo").removeClass('error')
    this.entidad.descripcion = $("#desc").val()
    this.entidad.tipo = $("#tipo").val()
    this.entidad.fechaDeVencimiento = $("#fecha").val()
    this.entidad.precio = parseInt( $("#precio").val())

    this.entidad.id = this.idAut;
    this.idAut++;
    this.entidad.rutaDeFoto = '../../assets/default.png'
    if(this.entidad.tipo == 'liquido' || this.entidad.tipo == 'solido'){
      if(this.entidad.precio >= 0 && this.entidad.precio <= 1000){
        this.output_altaProd.emit(this.entidad);
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
