import { Inventario } from "./Inventario.js";
import { Medicamento } from "./Medicamento.js";
import { Venta } from "./Venta.js";
const medicamento1 = new Medicamento(1,"Paracetamol",100,10);
const medicamento2 = new Medicamento(2,"Ibuprofeno",50,5);
const medicamento3 = new Medicamento(3,"Pentanol",300,2);

const inventario = new Inventario();
inventario.agregarMedicamento(medicamento1);
inventario.agregarMedicamento(medicamento2);
inventario.agregarMedicamento(medicamento3);

console.log(inventario.mostrarInventario());

const venta = new Venta(medicamento1,2,medicamento1.precio*2);
console.log(venta.registrarVenta());
console.log("VER STOCK"+inventario.mostrarInventario());
const venta1 = new Venta(medicamento1,1,900);
console.log(venta1.registrarVenta());
console.log(medicamento1);

