//Variables: let, const
//1. Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola.
let nombre = "Leo";
const nombre2 = "Leo";
console.log(nombre);
console.log(nombre2);
//2. Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado.
let num1 = 14;
let num2 = 15;
console.log("suma ", num1 + num2);
//3. Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola.
const PI = 3.14159;
console.log(PI);
//----------------------------------------------------------------------------------------------------------//
//Funciones: function
/*4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo
personalizado.*/
function saludar(nombre) {
    return "Gusto en verte ", nombre;
}
console.log(saludar(nombre));
/*5. Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y
`false` si es impar.*/
function esPar(num1) {
    if (num1 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(esPar(num2));
/*6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la
suma de sus elementos.*/
let miArray = [1, 2, 3, 4, 5];
function sumarArray(Array) {
    let suma = 0;
    for (let i = 0; i < Array.length; i++) {
        suma += Array[i];
    }
    return suma;
}
console.log(sumarArray(miArray));
//----------------------------------------------------------------------------------------------------------//
//Objetos literales y constructores
//7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`.
const persona = {
    nombre: "Constanza",
    edad: 18,
    profesion: "Designer UX/UI"

};
console.log(persona);

/*8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un
objeto con esas propiedades.*/
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
let producto = new Producto("coty", 1000000, 1);
console.log("producto");
console.log(producto);
/*9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`,
`director` y `anio`.*/
function Pelicula(titulo, director, anio) {
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
}
const pelicula = new Pelicula("Interestellar", "Christopher Nolan", 2014);
console.log(pelicula);
//----------------------------------------------------------------------------------------------------------//
//Arrays
//10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.
let frutas = ["Pera", "Manzana", "Kiwi", "Melocoton", "Sandia"];
console.log(frutas[2]);
//11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.
frutas.push("Naranja");
console.log(frutas);
/*12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne
un nuevo array solo con los números pares.*/
function filtrarPares(array) {
    let arrayPares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayPares.push(array[i]);
        }
    }

    return arrayPares;
}
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filtrarPares(arrayNumeros))
//----------------------------------------------------------------------------------------------------------//
//Funciones y Objetos combinados
//13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un objeto persona con esas propiedades.

function crearPersona(nombre, edad) {
    return { nombre, edad };
}
let personita = crearPersona("Leo", 20);
console.log(personita);
console.log(crearPersona("Constanza", 18));
//14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne una cadena con su información.
function obtenerInfo(persona) {
    let cadena = "El nombre de la persona es[" + persona.nombre + "] y su edad es [" + persona.edad + "]";
    return cadena;
}
console.log(obtenerInfo(personita));
//----------------------------------------------------------------------------------------------------------//
//Más sobre Arrays y Funciones
//15. Crear una función `duplicarArray` que tome un array de números como parámetro y retorne un nuevo array con cada elemento duplicado.
function duplicarArray(array) {
    const arrayDuplicado = [];
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp = array[i];
        arrayDuplicado.push(temp * 2);
    }

    return arrayDuplicado;
}
const array = [1, 2, 3, 4];
console.log(array)
console.log(duplicarArray(array));
//16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la cadena invertida.
function invertirCadena(array) {
    let arrayInvertido = [];
    let i = array.length - 1;
    while (i >= 0) {
        arrayInvertido.push(array[i]);
        i--;
    }

    return arrayInvertido;
}
const arrayParaInvertir = ["c", "o", "t", "y"];
console.log(arrayParaInvertir);
console.log(invertirCadena(arrayParaInvertir));
//17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al número.

function filtrarPorNumero(array, numero) {

    let arrayConLongitud = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > numero) {
            arrayConLongitud.push(array[i]);
        }
    }
    return arrayConLongitud;
}
let cadenaDias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log(cadenaDias);
console.log(filtrarPorNumero(cadenaDias, 6));

//----------------------------------------------------------------------------------------------------------//
//Objetos y Arrays de Objetos
//18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como `nombre`, `edad` y `promedio`.
let estudiantes =
    [
        {
            nombre: "Leo",
            edad: 20,
            promedio: 10
        },
        {
            nombre: "Constanza",
            edad: 18,
            promedio: 10
        },
        {
            nombre: "Carlos",
            edad: 18,
            promedio: 6
        }
    ]
console.log(estudiantes);

//19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y retorne el objeto del estudiante con ese nombre.
function buscarEstudiante(arrayEstudiantes, nombre) {
    let estudiante = null;
    for (let i = 0; i < arrayEstudiantes.length; i++) {
        if (arrayEstudiantes[i].nombre === nombre) {
            console.log(arrayEstudiantes[i]);

            estudiante = arrayEstudiantes[i];
        }
    }
    return estudiante;
}
console.log(buscarEstudiante(estudiantes, "Constanza"));
//20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio de sus promedios.
function promedioClase(arrayEstudiantes) {
    let promedio = 0;
    let suma = 0;
    for (let i = 0; i < arrayEstudiantes.length; i++) {

        suma += arrayEstudiantes[i].promedio;

    }
    promedio = suma / arrayEstudiantes.length;
    return promedio;
}
console.log(promedioClase(estudiantes));
//----------------------------------------------------------------------------------------------------------//
//Uso avanzado de Objetos y Funciones
//21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como `arrancar` y `detener`.
const coche = {
    marca: "fiat",
    modelo: "147",
    anio: 2005,
    arrancar: () => {
        return "Encendido";
    },
    detener: () => {
        return "Detenido";
    }
}
console.log(coche);
console.log(coche.arrancar);
console.log(coche.detener);
//22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar` que imprima un saludo personalizado.
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        return "Hola joven", nombre, "que la fuerza te acompañe!!!";
    }
}
const persona1 = new Persona("coty", 18);
console.log(persona1);
console.log(persona1.saludar);
//23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un producto al carrito.
function Carrito() {
    this.carrito = [];
    this.agregarProducto = function (producto) {
        this.carrito.push(producto);
    }

}
let carritoCompras = new Carrito();
carritoCompras.agregarProducto(new Producto("papa", 10, 3));
carritoCompras.agregarProducto(new Producto("hamburguesas", 100, 5));
carritoCompras.agregarProducto(new Producto("manzana", 16, 6));
carritoCompras.agregarProducto(new Producto("papel", 100, 7));
console.log(carritoCompras);
//----------------------------------------------------------------------------------------------------------//
//Manipulación de Arrays y Objetos
//24. Crear una función `ordenarNumeros` que tome un array de números como parámetro y retorne un nuevo array con los números ordenados de menor a mayor.
function compararNumeros(a, b) {//me sirve para poder utilizar el sort
    return a - b;
}
function ordenarNumeros(arrayDesordenado) {
    let arrayOrdenado = arrayDesordenado.sort(compararNumeros);
    return arrayOrdenado;
}
console.log(ordenarNumeros([20, 1, 45]));
//25. Crear una función `eliminarEstudiante` que tome un array de estudiantes y un nombre, y retorne un nuevo array sin el estudiante con ese nombre.

function eliminarEstudiante(arrayEstudiantes, nombre) {
    let nuevoArray = [];

    for (let i = 0; i < arrayEstudiantes.length; i++) {
        if (arrayEstudiantes[i].nombre !== nombre) {
            nuevoArray.push(arrayEstudiantes[i]);
        }
    }
    return nuevoArray;
}
console.log(estudiantes);
console.log(eliminarEstudiante(estudiantes, "Carlos"));

//26. Crear una función `totalCarrito` que tome un array de productos y retorne el precio total de los productos.
function totalCarrito(carritoArray)//es el array de productos
{
    let totalCompra = 0;

    for (let i = 0; i < carritoArray.carrito.length; i++) {
        totalCompra += carritoArray.carrito[i].precio;
    }

    return totalCompra;
}
console.log(carritoCompras);
console.log("El precio total de la compra $", totalCarrito(carritoCompras));
//----------------------------------------------------------------------------------------------------------//
//Uso avanzado de Funciones y Objetos
//27. Crear una función `crearCalculadora` que retorne un objeto con métodos `sumar`, `restar`, `multiplicar` y `dividir`.
function crearCalculadora() {

    return {
        sumar: function (num1, num2) {
            return num1 + num2;
        },
        restar: function (num1, num2) {
            return num1 - num2;
        },
        multiplicar: function (num1, num2) {
            return num1 * num2;
        },
        dividir: function (num1, num2) {
            if (num2 == 0) {
                return "No se puede dividir por 0";
            }
            return num1 / num2;
        }
    };
}
let calculadora = crearCalculadora();
console.log(calculadora.sumar(1, 2));
console.log(calculadora.restar(1, 2));
console.log(calculadora.multiplicar(1, 2));
console.log(calculadora.dividir(1, 2));
//28. Crear una función `crearCuentaBancaria` que retorne un objeto con métodos `depositar`, `retirar` y `saldo`.
function crearCuentaBancaria() {
    let saldo = 0;
    let cuenta = {

        depositar: function (monto) {
            saldo += monto
            return monto
        },
        retirar: function (monto) {
            if (saldo > 0) {
                if (saldo - monto >= 0) {
                    return saldo -= monto;
                }
            }
        },
        saldo: function () {
            return saldo;
        }
    }

    return cuenta;
}
let cuentaBancaria = crearCuentaBancaria();
console.log(cuentaBancaria.depositar(1000));
console.log(cuentaBancaria.depositar(1000));
console.log(cuentaBancaria.saldo());
console.log(cuentaBancaria.retirar(500));
//29. Crear un constructor `Libro` con propiedades `titulo`, `autor` y `paginas`, y un método `detalles` que imprima la información del libro.
function Libro(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.detalles = function () {
        let detalle = "Titulo: " + titulo + "| Autor: " + autor + "| Cantidad de paginas: " + paginas;
        return detalle;
    }

}
let libro = new Libro("Constanza", "Constanza", 1000);
console.log(libro.detalles());
//----------------------------------------------------------------------------------------------------------//
//Proyecto Final: Manejo de Datos
//30. Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays. Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes.
function Tarea(descripcionTarea) {

    this.descripcionTarea = descripcionTarea;
    this.realizada = false;
}


function to_do_List() {
   
   let tareas = [];//aca se van a acumular las tareas
    let tarea ={
         agregarTarea: function(tareaNueva) {
            tareas.push(tareaNueva);
            return "Tarea agregada";
        },
         marcarTareaLista:function(nombreTarea) {
            for (let i = 0; i < tareas.length; i++) {
                if (nombreTarea.descripcionTarea ===tareas[i].descripcionTarea) {
                    console.log(nombreTarea.descripcionTarea);
                    tareas[i].realizada = true;

                }
            }
            return "Tarea realizada";
        },
         listarTareasPendientes:function()
        {
            let tareasPendientes = [];
            for(let i = 0;i<tareas.length;i++)
            {
                if(!tareas[i].realizada){
                    tareasPendientes.push(tareas[i]);
                }
            }
            return tareasPendientes;
        }
    }


    return tarea;
}

let listaTareas = to_do_List();
console.log(listaTareas.agregarTarea(new Tarea("manejar")));
console.log(listaTareas.agregarTarea(new Tarea("viaje a USA")));
console.log(listaTareas.agregarTarea(new Tarea("ver el atardecer a las 5:30 tomando mates")));
console.log(listaTareas.listarTareasPendientes());
console.log(listaTareas.marcarTareaLista(new Tarea("manejar")));
console.log(listaTareas.listarTareasPendientes());















