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
/* Ejercicios sobre Set
6. Crear y manipular un Set:
o Crea un Set con los números 1, 2, 3, 4, y 5.
o Añade el número 6 y elimina el número 3. */
let set = new Set();
for(let i = 1;i<6;i++)
{
    set.add(i);
}
console.log(set);
set.add(6);
console.log(set);
set.delete(3);
console.log(set);
/* 7 Convertir un Set a un Array:
o Convierte el Set del ejercicio anterior en un array */
const array = [...set];//spread operator
console.log(array);
/*8. Eliminar duplicados de un array usando Set:
o Dado un array [1, 2, 2, 3, 4, 4, 5], elimina los duplicados utilizando un Set.
 */
const array2 = [1, 2, 2, 3, 4, 4, 5];
const setSinDuplicado = new Set(array2);
console.log("Set[sin duplicados]: ",setSinDuplicado);
/*9. Comprobar existencia en un Set:
o Comprueba si el número 4 existe en el Set creado anteriormente y muestra el
resultado.
 */
console.log(setSinDuplicado.has(4));
/**10. Iterar sobre un Set:
o Itera sobre el Set creado en el ejercicio 6 e imprime cada número. */
setSinDuplicado.forEach((e)=>console.log(e));
