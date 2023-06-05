import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { InventarioComponent } from './inventario/inventario.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'inventario', component: InventarioComponent},
  { path: 'contactos', component: ContactosComponent },
  { path: 'add', component: AgregarComponent },
  { path: 'edit/:id', component: ModificarComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PedidosComponent,
    InventarioComponent,
    ContactosComponent,
    AgregarComponent,
    ModificarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
