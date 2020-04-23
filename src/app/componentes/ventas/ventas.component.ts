import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/clases/venta';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  listadoVentas: Venta[]
  constructor() { 
    this.listadoVentas = [{
      id: 1, descripcion: 'yogurt',
      tipo: 'liquido',
      fechaDeVencimiento: '22/07/21',
      precio: 70,
      rutaDeFoto: '../../assets/yogurt.jpg',
      cantidad: 5,
      fechaDeVenta: '20/04/20'
    }]
  }

  ngOnInit(): void {
  }

  borrar(venta:Venta){
    let index = this.listadoVentas.indexOf(venta);
    this.listadoVentas.splice(index, 1);
  }

  agregarVenta(venta:Venta){
    this.listadoVentas.push(venta);
  }

}
