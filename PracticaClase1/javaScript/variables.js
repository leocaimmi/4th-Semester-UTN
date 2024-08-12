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


