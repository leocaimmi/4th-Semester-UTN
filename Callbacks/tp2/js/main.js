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
/*Ejercicios sobre Map
11. Crear y manipular un Map:
o Crea un Map con tres entradas: "nombre" -> "Juan", "edad" -> 30, "ciudad" ->
"Madrid".
o Añade una nueva entrada para "país" -> "España" y elimina la entrada
"ciudad".
 */

const map = new Map();
map.set("nombre","Juan");
map.set("edad",30);
map.set("ciudad","Madrid");
console.log(map);
map.delete("ciudad");
console.log(map);
map.set("pais","España");
console.log(map);
/*12. Acceder a valores en un Map:
o Accede al valor de "nombre" en el Map creado y muéstralo. */
console.log(map.get("nombre"));
/*13. Iterar sobre un Map:
o Itera sobre las entradas del Map e imprime cada par clave-valor. */
map.forEach((e,k)=>console.log(k,"= "+e));
/*14. Comprobar existencia en un Map:
o Comprueba si el Map tiene la clave "edad" y muestra el resultado. */
console.log(map.has("edad"));
/*15. Convertir un Map a un Array:
o Convierte el Map creado en el ejercicio 11 a un array de arrays */
const arrayMap = [...map];//spread operator
//const arrayMap = Array.from(map);
console.log(arrayMap);
/*Ejercicios sobre Arrays y Métodos de Array
16. Filtrar números mayores que 10:
o Dado un array [5, 10, 15, 20, 25], usa filter para obtener los números mayores
que 10.
 */
const arrayMayor = [5, 10, 15, 20, 25];
console.log(arrayMayor.filter((e)=>e>10));
/*17. Doblar los números en un array:
o Usa map para crear un nuevo array donde cada número en el array [1, 2, 3, 4,
5] se ha doblado. */
const mapNuevo = new Map();
for(let i = 1;i<6;i++)
{
    mapNuevo.set(i,i);
}
console.log(mapNuevo);
const nuevoArray = [];mapNuevo.forEach((e)=>{nuevoArray.push(e*2)});
console.log(nuevoArray);
/*18. Convertir un array de nombres a mayúsculas:
o Dado un array ["juan", "maria", "pedro"], usa map para convertir cada nombre
a mayúsculas */
const arrayNombres = ["juan", "maria", "pedro"];
console.log(arrayNombres.map(e =>e.toUpperCase()));
/*19. Filtrar palabras cortas:
o Dado un array ["árbol", "casa", "elefante", "sol"], usa filter para obtener las
palabras con menos de 5 letras.
 */
const arrayCosas = ["árbol", "casa", "elefante", "sol"];
console.log(arrayCosas.filter((e)=>e.length<5));
/*20. Sumar números pares en un array:
o Dado un array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], usa filter para obtener los números
pares y luego utiliza reduce para sumarlos. */
let array20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array20);
array20 = array20.filter((e)=>e%2==0);
console.log(array20);
const suma =array20.reduce((acumulador,e)=>acumulador+e);//e de elemento
console.log(suma);


