import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:3000/api'; 
  constructor(private http: HttpClient) { }

  //get productos
getProductos() {
  return this.http.get<Producto[]>(this.url);
}

//g//get un producto
getUnProducto(id: number) {
  return this.http.get<Producto>(this.url + '/'+ id);
}


  //agregar Producto
  agregarProducto(producto: Producto) {
    return this.http.post(this.url, producto);
  }

  //eliminar Producto
  deleteProducto(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  //modificar Producto
  modificarProducto(id: number, producto: Producto) {
    return this.http.put(this.url + '/' + id, producto);
  }

}


export interface Producto {
  id_producto?: number;
  nombre_producto?: string;
  descripcion?: string;
  cantidad_inventario?: number;
  precio?: number;
  id_categoria?: number;
}
