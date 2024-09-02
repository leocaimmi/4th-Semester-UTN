/*Ejercicio 1: Función Callback Básica
Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una
función de callback. La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la
función de callback.*/
const callback1 = function(msj)
{
console.log(msj);
}
function mostrarMensaje(msj,callback)
{
callback1(msj);
}
mostrarMensaje("Hola como estas?",callback1);
/*Ejercicio 2: Callback con Retorno de Datos
Crea una función llamada `sumarAsync` que acepte dos números y una función de callback.
Esta función debe sumar los números y luego llamar a la función de callback con el resultado.*/ 

function sumarAsync(a,b,callback2)
{
const resultado = a+b;
callback2(resultado);
}

sumarAsync(10,90,(suma)=>console.log(`la suma es ${suma}`));
/*Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un
número de milisegundos. La función debe llamar al callback después de la cantidad
especificada de tiempo utilizando `setTimeout`.
*/
function retrasarEjecucion(callback,milisegundos)
{
    console.log("0 segundos");
setTimeout(()=>{
    callback();
},milisegundos);
}
const milisegundos = 5000;
retrasarEjecucion(()=>console.log(`Pasaron ${milisegundos/1000} segundos`),milisegundos);

