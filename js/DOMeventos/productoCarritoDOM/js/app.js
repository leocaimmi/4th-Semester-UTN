import { Producto } from "./producto.js";
let arrayProductos = new Array();
let nombre = "";
let cantidad = "";
let Precio = 0;

const botonProducto = document.getElementById(`botonProducto`);
botonProducto.addEventListener(`click`, function () {
    const textProducto = document.getElementById(`textProducto`);
    const textCantidad = document.getElementById(`textCantidad`);
    const textPrecio = document.getElementById(`textPrecio`);
    let flag = true;
    //toDo modularizar validaciones
    if (!textProducto.value||arrayProductos.find((e)=>e.nombre===textProducto.value)) {
        alert("Debe ingresar un texto valido");
        flag = false;
    }
    
    if (!isNaN(textCantidad) || textCantidad.value <= 0) {
        alert("Debe ingresar un numero valido");
        textCantidad.value = null;
        flag = false;
    }

    if (!isNaN(textPrecio) || textPrecio.value <= 0) {
        alert("Debe ingresar un numero valido");
        textPrecio.value = null;
        flag = false;
    }
    if (flag)//todos los campos estan completos y verificados"""
    {
        const producto = new Producto(textProducto.value, textCantidad.value, textPrecio.value);
        arrayProductos.push(producto);
        console.log("Agregado correctamente");
        agregarLi(producto);
        actualizarPrecioCompra(arrayProductos);
    }
    eliminarLI();

    console.log(arrayProductos);
});
function agregarLi(producto) {
    const ulCompletar = document.querySelector('#ProductoFinal');

    if (ulCompletar) {
        const nuevoLI = document.createElement('li');// Crear un nuevo li
        nuevoLI.textContent = `Nombre: ${producto.nombre} Cantidad: ${producto.cantidad} Precio: $${producto.precio}`;
        ulCompletar.appendChild(nuevoLI);// Añadir el li al ul
    } else {
        const nuevoUl = document.createElement(`ul`);
        nuevoUl.id = 'ProductoFinal'; // Asignamos el ID
        const nuevoLI = document.createElement('li');// Crear un nuevo li
        nuevoLI.textContent = `Nombre: ${producto.nombre} Cantidad: ${producto.cantidad} Precio: $${producto.precio}`;
        nuevoUl.appendChild(nuevoLI);// Añadir el li al ul
    }

}
function eliminarLI() {
    const liEliminar = document.querySelectorAll('#ProductoFinal li');
    if (liEliminar) {
        liEliminar.forEach((e) => {
            e.addEventListener(`click`, function () {
                const textoLi = e.textContent;
                const nombreProducto = textoLi.split(' ')[1];// El nombre está después de "Nombre: "
                arrayProductos = arrayProductos.filter((e) => e.nombre !== nombreProducto);
                e.remove();
                actualizarPrecioCompra();
            });
        });
    }

}
function actualizarPrecioCompra() {
    const parrafo = document.getElementById(`totalCompra`);
    let totalCompra = 0;
    if (arrayProductos) {

        arrayProductos.forEach((e) => {
            totalCompra += (e.precio * e.cantidad);
        });
        parrafo.textContent = `Total: $${totalCompra}`;

    }

}
const botonResetear = document.getElementById(`botonResetear`);
botonResetear.addEventListener(`click`,function(){
const ulElimnar = document.querySelectorAll('#ProductoFinal li');
ulElimnar.forEach((e)=>{
    e.remove();
});
arrayProductos = [];
actualizarPrecioCompra();

});
//toDO almacenar en bbdd o json server

