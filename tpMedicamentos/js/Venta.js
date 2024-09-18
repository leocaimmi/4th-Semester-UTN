export class Venta{
constructor(medicamento,cantidad,total)
{
    this.medicamento = medicamento;
    this.cantidad = cantidad;
    this.total = total;
}
registrarVenta()
{
    let msj = "No se puede realizar la venta por falta de stock";
        let stock = this.medicamento.getStock();
        if(stock-this.cantidad>0)//si tengo stock 
        {
            this.medicamento.setStock(stock-this.cantidad);
            msj = "Venta realizada";
        }
        
    return msj;
}
}