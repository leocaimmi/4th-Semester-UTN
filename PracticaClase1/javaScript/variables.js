//Variables: let, const
//1. Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola.
let nombre = "Leo";
const nombre2 = "Leo";
console.log(nombre);
console.log(nombre2);
//2. Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado.
let num1 = 14;
let num2 = 15;
console.log("suma ",num1+num2);
//3. Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola.
const PI = 3.14159;
console.log(PI);
//----------------------------------------------------------------------------------------------------------//
//Funciones: function
/*4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo
personalizado.*/
function saludar(nombre){
    return "Gusto en verte ",nombre;
}
console.log(saludar(nombre));
/*5. Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y
`false` si es impar.*/
function esPar(num1){
if(num1%2 == 0)
{
    return true;
}else
{
    return false;
}
}
console.log(esPar(num2));
/*6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la
suma de sus elementos.*/
let miArray = [1,2,3,4,5];
function sumarArray(Array)
{
    let suma = 0;
    for(let i = 0;i<Array.length;i++)
    {
        suma+=Array[i];
    }
return suma;
}
console.log(sumarArray(miArray));
//----------------------------------------------------------------------------------------------------------//
//Objetos literales y constructores
//7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`.
const persona ={
        nombre: "Constanza",
       edad: 18,
       profesion:"Designer UX/UI"

};
console.log(persona);

/*8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un
objeto con esas propiedades.*/
function Producto(nombre,precio,stock){
this.nombre = nombre;
this.precio = precio;
this.stock = stock; 
}
let producto = new Producto("coty",1000000,1);
console.log("producto");
console.log(producto);
/*9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`,
`director` y `anio`.*/
function Pelicula(titulo,director,anio)
{
    this.titulo =titulo;
    this.director = director;
    this.anio = anio;
}
const pelicula = new Pelicula("Interestellar","Christopher Nolan",2014);
console.log(pelicula);
//----------------------------------------------------------------------------------------------------------//
//Arrays
//10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.
let frutas = ["Pera","Manzana","Kiwi","Melocoton","Sandia"];
console.log(frutas[2]);
//11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.
frutas.push("Naranja");
console.log(frutas);
/*12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne
un nuevo array solo con los números pares.*/
function filtrarPares(array)
{
    let arrayPares = [];
    for(let i = 0;i<array.length;i++)
    {
        if(array[i]%2==0)
        {
            arrayPares.push(array[i]);
        }
    }

    return arrayPares;
}
let arrayNumeros = [1,2,3,4,5,6,7,8,9];
console.log(filtrarPares(arrayNumeros))
//----------------------------------------------------------------------------------------------------------//
//Funciones y Objetos combinados
//13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un objeto persona con esas propiedades.

function crearPersona(nombre,edad)
{
    return { nombre, edad };
}
let personita = crearPersona("Leo",20);
console.log(personita);
console.log(crearPersona("Constanza",18));
//14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne una cadena con su información.
function obtenerInfo(persona)
{
    let cadena = "El nombre de la persona es["+persona.nombre+"] y su edad es ["+persona.edad+"]";
return cadena;
}
console.log(obtenerInfo(personita));
//----------------------------------------------------------------------------------------------------------//
//Más sobre Arrays y Funciones
//15. Crear una función `duplicarArray` que tome un array de números como parámetro y retorne un nuevo array con cada elemento duplicado.
function duplicarArray(array)
{
    const arrayDuplicado = [];
    let temp = 0;
    for(let i = 0;i<array.length;i++)
    {
        temp = array[i];
        arrayDuplicado.push(temp*2);
    }
    
    return arrayDuplicado;
}
const array = [1,2,3,4];
console.log(array)
console.log(duplicarArray(array));
//16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la cadena invertida.
//17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al número.





