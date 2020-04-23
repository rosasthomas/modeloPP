import { Component, OnInit, Input } from '@angular/core';
import { Entidad } from 'src/app/clases/entidad';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() input_productos: Entidad[]
  entidadDetalle: Entidad;

  constructor() { }

  ngOnInit(): void {
  }

  borrar(entidad:Entidad){
    let index = this.input_productos.indexOf(entidad);
    this.input_productos.splice(index, 1);
  }

  entidadParaDetalle(entidad:Entidad){
    this.entidadDetalle = entidad;
  }
  agregarProd(producto:Entidad){
    this.input_productos.push(producto);
  }
}
