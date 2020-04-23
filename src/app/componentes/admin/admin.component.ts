import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/clases/entidad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listado:Entidad[]
  listadoEntidades:Entidad[]
  prod=true;

  constructor(public route:Router) {
    this.listado = [{id: 1, descripcion: 'yogurt',
      tipo: 'liquido',
      fechaDeVencimiento: '22/07/21',
      precio: 70,
      rutaDeFoto: '../../assets/yogurt.jpg'},
      {id: 2, descripcion: 'galletita',
      tipo: 'solido',
      fechaDeVencimiento: '1/11/22',
      precio: 50,
      rutaDeFoto: '../../assets/galletita.jpg'},
      {id: 3, descripcion: 'pan',
      tipo: 'solido',
      fechaDeVencimiento: '02/04/20',
      precio: 100,
      rutaDeFoto: '../../assets/pan.jpg'}];

      localStorage.setItem("listadoEntidad", JSON.stringify(this.listado));
      this.route.navigate([''])
      this.listadoEntidades = JSON.parse(localStorage.getItem("listadoEntidad"));
   }

  ngOnInit(): void {
  }

  nav(value:string){
    if(value == 'prod'){
      this.prod=true;
      this.route.navigate(['productos'])
    }
    else if(value == 'venta'){
      this.prod=false;
      this.route.navigate(['ventas'])
    }
  }
}
