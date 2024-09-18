export class Inventario{
constructor()
{
    this.medicamentos = new Array();
}
agregarMedicamento(medicamento)
{
    this.medicamentos.push(medicamento);
}
buscarMedicamento(id)
{
    return this.medicamentos.forEach((e)=>{if(e.id === id){return true}});
}
mostrarInventario()
{
    return this.medicamentos.forEach((e)=>console.log(e));
}
actualizarStock(id,cantidad)
{
this.medicamentos.forEach((e)=>{if(e.id ===id){e.cantidad = cantidad}});
}




}