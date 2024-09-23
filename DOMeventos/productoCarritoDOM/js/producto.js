export class Producto{
    constructor(nombre,cantidad,precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
mostrar()
{
    return `Nombre = ${this.nombre}Cantidad = ${this.cantidad}Precio = $${this.precio}`;
}

}