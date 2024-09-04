/*1. Multiplicar números con un callback:
o Crea una función multiplicar que acepte dos números y un callback.
o Usa el callback para mostrar el resultado de multiplicar los dos números. */
function multiplicarNumeros(a,b,callback)
{
    callback(a*b);
}
multiplicarNumeros(10,10,(resultado)=>{console.log(resultado)});
/*2. Operación con números usando callbacks:
o Define una función operarNumeros que acepte dos números y un callback.
o Crea dos callbacks, uno para sumar y otro para restar los números. */
function operarNumeros(a,b,callback)
{
    callback(a,b);
}
operarNumeros(10,5,(a,b)=>{console.log(a-b)});
operarNumeros(10,5,(a,b)=>{console.log(a+b)});
/*3. Uso de setTimeout con callbacks:
o Usa setTimeout para imprimir "Esto es un callback" después de 2 segundos. */
function pruebaSetTimeOut(msj,callback)
{
    console.log("0 segundos");
    setTimeout(()=>{
        callback(msj)
        
    },2000);
}
const msj = "Esto es un callback";
pruebaSetTimeOut(msj,(msj)=>{console.log(msj)});
/*4. Filtrar números pares con un callback:
o Define una función filtrarPares que acepte un array de números y un callback.
o Usa el callback para filtrar solo los números pares. */
function filtrarPares(array,callback)
{
return callback(array);
}
filtrarPares([0,1,2,3,4,5,6,7,8,9,10],(newArray)=>{console.log(newArray.filter((e)=>e%2!==0))});