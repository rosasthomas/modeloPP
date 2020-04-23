import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { AltaProdComponent } from './componentes/alta-prod/alta-prod.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { VentaNuevaComponent } from './componentes/venta-nueva/venta-nueva.component';
import { VentaListadoComponent } from './componentes/venta-listado/venta-listado.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
    { path: "", component: AdminComponent, children: [
      { path: "productos", component: ProductosComponent,
      children: [
        {path: "alta", component: AltaProdComponent}
      ]},
      { path: "ventas", component: VentasComponent,
      children: [
        { path: "nueva", component: VentaNuevaComponent},
        { path: "listado", component: VentaListadoComponent}
      ]}
    ]},
  { path: "", pathMatch: "full", redirectTo: ""},
  { path: "busqueda", component: BuscarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
