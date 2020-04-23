import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './componentes/admin/admin.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { BotonBorrarComponent } from './componentes/boton-borrar/boton-borrar.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { AltaProdComponent } from './componentes/alta-prod/alta-prod.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { VentaNuevaComponent } from './componentes/venta-nueva/venta-nueva.component';
import { VentaListadoComponent } from './componentes/venta-listado/venta-listado.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './componentes/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ListadoEntidadComponent,
    BotonBorrarComponent,
    BuscarComponent,
    DetallesComponent,
    AltaProdComponent,
    VentasComponent,
    VentaNuevaComponent,
    VentaListadoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
