import { Component, OnInit } from '@angular/core';
import { Producto, ProductoService } from '../services/producto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{

  producto: Producto = {
    id_producto: 0,
    nombre_producto: '',
    descripcion: '',
    cantidad_inventario: 0,
    precio: 0,
    id_categoria: 0,
  };

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {

  }

  agregar() {
    delete this.producto.id_producto;

    this.productoService.agregarProducto(this.producto).subscribe();
    this.router.navigate(['/inventario']);
  }



}
