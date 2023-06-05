import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{
  
  nombre: string = '';
  lugar: string = '';
  producto: string = '';
  cantidad: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();
    alert(
      `Nombre: ${this.nombre}\nLugar: ${this.lugar}\nProducto: ${this.producto}\nCantidad: ${this.cantidad}`
    );
  }
}
