//Arreglos con Tipos de Datos Primitivos:
//1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.
let array = [1, 2, 3, 4, 5, 6];
function sumarArreglo(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}
console.log(sumarArreglo(array));

//2. Promedio: Calcula el promedio de los números en un arreglo.
function calcularPromedio() {
    let promedio = 0, suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    promedio = suma / array.length;
    return promedio;
}
console.log(calcularPromedio(array));
/*3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de
números.*/
function buscarMayor(array) {
    let numAux = array[0];

    for (let i = 0; i < array.length; i++) {
        if (numAux < array[i]) {
            numAux = array[i];
        }
    }
    return numAux;
}


function buscarMenor(array) {
    let numAux = array[0];
    for (let i = 0; i < array.length; i++) {
        if (numAux > array[i]) {
            numAux = array[i];
        }
    }
    return numAux;
}
console.log("Mayor del array: " + buscarMayor(array));
console.log("Menor del array: " + buscarMenor(array));

console.log(Math.min(...array));
console.log(Math.max(...array));
/*4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su
índice, si existe.*/
function buscarValor(array, valor) {
    let indice = -1;
    for (let i = 0; i < array.length; i++) {
        if (valor === array[i]) {
            indice = i;
        }
    }
    return indice;
}
console.log("El indice del array: " + buscarValor(array, 3));

console.log(array.findIndex((array) => array == 3));
/*5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con
números pares y otro con números impares.*/
function filtrarArregloPar(array) {
    let arregloPar = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arregloPar.push(array[i]);
        }
    }
    return arregloPar;
}
function filtrarArregloImpar(array) {
    let arregloImpar = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            arregloImpar.push(array[i]);
        }
    }
    return arregloImpar;
}
console.log(filtrarArregloPar(array));
console.log(filtrarArregloImpar(array));

console.log(array.filter((array) => array % 2 == 0));
console.log(array.filter((array) => array % 2 == 1));
//6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.
let arregloDuplicado = [2, 2, 1, 5, 1, 10, 2, 4, 6];
function borrarDuplicados(array) {
    return [... new Set(array)];
}
console.log(arregloDuplicado);
arregloDuplicado = borrarDuplicados(arregloDuplicado);
//7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente.
console.log(arregloDuplicado.sort((a, b) => a - b));

//8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.
let numeros = [1, 2, 3, 4, 2, 5, 2];
function borrarOcurrencias(array, valorAborrar) {
    return array.filter(elemento => elemento !== valorAborrar);
}
console.log(borrarOcurrencias(numeros, 2));
/*9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya
duplicados.*/
let arrayCombinado = numeros.concat(arregloDuplicado);
console.log(arrayCombinado);
console.log(borrarDuplicados(arrayCombinado));

//Arreglos con Tipos de Datos Compuestos:
//10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

}
class ListaCompras {
    constructor() {
        this.listaCompras = [];
    }
    agregarProducto(producto) {
        this.listaCompras.push(producto);
    }
    verTotalLista() {
        let suma = 0;
        for (let e of this.listaCompras) {
            suma += e.precio;
        }
        return suma;
    }

}
let listaCompras = new ListaCompras();
listaCompras.agregarProducto(new Producto("papa", 1000, 3));
listaCompras.agregarProducto(new Producto("carne", 7000, 1));
listaCompras.agregarProducto(new Producto("pan", 2000, 2));
console.log(listaCompras);
console.log("Total de la lista $" + listaCompras.verTotalLista());

//11. Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y correos electrónicos.
class Contacto {
    constructor(nombre, numero, Email) {
        this.nombre = nombre;
        this.numero = numero;
        this.Email = Email;
    }
}

class AgendaDeContactos {
    constructor() {
        this.agendaContactos = [];
    }
    agendarContacto(contacto) {
        this.agendaContactos.push(contacto);
    }
    eliminarContacto(contactoAborrar) {
        return this.agendaContactos = this.agendaContactos.filter(elemento => elemento !== contactoAborrar);
    }

}
let agendaContactos = new AgendaDeContactos();
let contacto = new Contacto("Carmen", 2234873232, "Carmen@hotmail.com");
agendaContactos.agendarContacto(new Contacto("Co", 2234362432, "co@hotmail.com"));
agendaContactos.agendarContacto(new Contacto("Leo", 2234362123, "leo@hotmail.com"));
agendaContactos.agendarContacto(new Contacto("Carlos", 2235432432, "Carlos@hotmail.com"));
agendaContactos.agendarContacto(contacto);
console.log(agendaContactos);
agendaContactos.eliminarContacto(contacto);
console.log(agendaContactos);

//12. Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la palabra en el párrafo.
function buscarCantidadPalabras(parrafo, palabraAContar) {

    parrafo = parrafo.toLowerCase().split(/\W+/);
    const cantidadPalabras = parrafo.filter(elemento => elemento === palabraAContar).length;
    return cantidadPalabras;
}

const palabra = "ejemplo";
const parrafo = "Hola que tal, por ejemplo,por ejemplo,por ejemplo,por ejemplo";
const cantidadPalabra = buscarCantidadPalabras(parrafo, palabra);
console.log(`La palabra "${palabra}" aparece "${cantidadPalabra}"`);

//13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.
const arrayPrueba = [
    { nombre: "leo", numero: 2 },
    { nombre: "co", numero: 1 },
    { nombre: "marta", numero: 3 },
];

function ordenarPorPropiedad(array) {
    return array.sort((a, b) => a.numero - b.numero);
}
console.log(ordenarPorPropiedad(arrayPrueba));

//14. Registro de Ventas: Crea un registro de ventas con información sobre productos, cantidades y precios.
class RegistroDeVentas {
    constructor() {
        this.ventas = [];
    }
    agregarVenta(producto) {
        this.ventas.push(producto);
    }
    informarVentas() {
        let informe = 'Estos son los productos vendidos hasta el momento:\n';

        this.ventas.forEach((venta, index) => { informe += `${index + 1}. ${venta.nombre} - Cantidad: ${venta.cantidad}, Precio: ${venta.precio}\n`; });
        return informe;
    }
}
let registroVentas = new RegistroDeVentas();
registroVentas.agregarVenta(new Producto("Playstation 5", 400, 2));
registroVentas.agregarVenta(new Producto("Playstation 4", 200, 1));
registroVentas.agregarVenta(new Producto("Iphone 15 pro", 1000, 4));
registroVentas.agregarVenta(new Producto("Samsung j10", 160, 10));
console.log(registroVentas.informarVentas());

//15. Carrito de Compras: Simula un carrito de compras que permite agregar, eliminar y calcular el total.

class CarritoDeCompras {
    constructor() {
        this.carrito = [];
    }
    agregar(producto) {
        this.carrito.push(producto);
    }
    eliminar(producto) {
        return this.carrito = this.carrito.filter(elemento => elemento !== producto);
    }
    calcularTotal() {
        let suma = 0;
        /*for (let i = 0;i<this.carrito.length;i++) {
            suma += this.carrito[i].precio * this.carrito[i].cantidad;
        }*/
        this.carrito.forEach((item) => { suma += item.precio * item.cantidad });

        return suma;
    }
}
let carritoCompras = new CarritoDeCompras();
let producto1 = new Producto("Playstation 5", 400, 2);
let producto2 = new Producto("Playstation 4", 200, 1);
let producto3 = new Producto("Iphone 15 pro", 1000, 4);
carritoCompras.agregar(producto1);
carritoCompras.agregar(producto2);
carritoCompras.agregar(producto3);
console.log(carritoCompras);
carritoCompras.eliminar(producto1);
console.log(carritoCompras);
console.log(carritoCompras.calcularTotal());

//16. Gestor de Tareas: Crea un gestor de tareas que permita agregar, completar y listar tareas pendientes.
class Tarea {
    constructor(tarea) {
        this.tarea = tarea;
        this.realizada = false;
    }
}

class GestorDeTareas {
    constructor() {
        this.tareas = [];
    }
    agregar(tarea) {
        this.tareas.push(tarea);
    }
    completar(tareaAMarcar) {
        this.tareas.forEach((tarea) => { if (tarea === tareaAMarcar) { tarea.realizada = true } });
    }
    listarPendientes() {
        let pendientes = "";
        this.tareas.forEach((tarea, index) => {if (!tarea.realizada) {pendientes += `${index + 1}: ${tarea.tarea}\n`;}});
        return pendientes;
    }
}
const tarea1 = new Tarea("Hacer la comida");
const tarea2 = new Tarea("Ir a comprar el postre");
const tarea3 = new Tarea("Ver pelicula");

let gestorDeTareas = new GestorDeTareas();
gestorDeTareas.agregar(tarea1);
gestorDeTareas.agregar(tarea2);
gestorDeTareas.agregar(tarea3);
console.log(gestorDeTareas);
gestorDeTareas.completar(tarea2);
console.log(gestorDeTareas);
console.log(gestorDeTareas.listarPendientes());




















