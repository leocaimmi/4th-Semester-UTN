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

/*Ejercicio 4: Callback Anidado
Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener
datos de usuario. Esta función debe aceptar un ID de usuario y una función de callback. Luego,
dentro de la función, debes simular una solicitud a una API y, cuando se complete, llamar a la
función de callback con los datos del usuario. */

function obtenerDatosUsuario(ID,callback)
{
setTimeout(()=>{
const usuario = {
    id:ID,
    nombre:"Manuel",
    apellido:"Belgrano",
    edad:1000,
    email:"example@example.com"
}
callback(usuario);
console.log("Pasaron 2 segundos");
},2000);
}
obtenerDatosUsuario(101,(usuario)=>{console.log(usuario)});



