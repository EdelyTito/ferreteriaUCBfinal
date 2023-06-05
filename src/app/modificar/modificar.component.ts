import { Component, OnInit } from '@angular/core';
import { Producto, ProductoService } from '../services/producto.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit{

  producto: Producto = {
    id_producto: 0,
    nombre_producto: '',
    descripcion: '',
    cantidad_inventario: 0,
    precio: 0,
    id_categoria: 0,
  };

  constructor(private productoService: ProductoService, 
              private router: Router,
              private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRouter.snapshot.params['id'];
    console.log('id de entrada: ' + id_entrada);

    if (id_entrada) {
      this.productoService.getUnProducto(Number(id_entrada)).subscribe(
        (res: Producto) => {
          this.producto = res;
          console.log(res);
        },
        err => console.log(err)
      );
    }     
  }

  modificar() {
    if (this.producto.id_producto !== undefined) {
      this.productoService.modificarProducto(this.producto.id_producto, this.producto).subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );    
      this.router.navigate(['/inventario']);
    } else {
      console.log('Producto id_producto no está definido');
    }
  }
  
  
}
