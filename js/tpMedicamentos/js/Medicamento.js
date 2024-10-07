export class Medicamento{
    
    constructor(id,nombre,precio,stock)
    {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    mostrarDetalles(){
        return `Nro ID ${this.id}| Nombre ${this.nombre} | Precio ${this.precio}| stock ${this.stock}`;
    }
    getStock()
    {
        return this.stock;
    }
    setStock(stock)
    {
        this.stock = stock;
    }

}