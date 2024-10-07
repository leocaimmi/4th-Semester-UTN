import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
productos =[
 { id:1,nombre:"Producto A",precio:100,descuento: true},
 { id:2,nombre:"Producto B",precio:200,descuento: false},
 { id:3,nombre:"Producto C",precio:300,descuento: true}
];
agregarProducto(nombre: string,precio:string){
  let nuevoProducto = {
    id:this.productos.length+1,
    nombre: nombre,
    precio: Number(precio),
    descuento: true
  }
  this.productos.push(nuevoProducto);
}
eliminarProducto(nombre: string){
  const index = this.productos.findIndex(e => e.nombre.toLowerCase() === nombre.trim().toLocaleLowerCase());
  if (index !== -1) {
    this.productos.splice(index, 1);//si lo encuentro lo borro
    console.log(`Producto "${nombre}" eliminado.`);
  } else {
    console.log(`Producto "${nombre}" no encontrado.`);
  }
}
}

