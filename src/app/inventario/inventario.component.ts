import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto} from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{
  
  //variable
  listarProducto: Producto[] = [];
  
  constructor(private productoService: ProductoService, private router:Router) { }

  ngOnInit(): void{
    this.cargarProductos();
  }

  cargarProductos()
  {
    this.productoService.getProductos().subscribe(
      res => {
        console.log(res);
        this.listarProducto = <any> res;
      },
      err => console.log(err)
    );
  }

  eliminar(id: number){
    this.productoService.deleteProducto(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.cargarProductos();
      },
      err=> console.log(err)
    );
  }

  modificar(id: number){
    this.router.navigate(['/edit/' + id]);
  }

}
