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

console.log( Math.min(...array));
console.log(Math.max(...array));
/*4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su
índice, si existe.*/
function buscarValor(array, valor) {
   let indice = -1;
    for (let i = 0; i < array.length; i++) {
        if(valor === array[i])
        {
             indice = i;
        }
    }
    return indice;
}
console.log("El indice del array: " + buscarValor(array,3));

console.log(array.findIndex((array)=> array ==3));
/*5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con
números pares y otro con números impares.*/
function filtrarArregloPar(array)
{
    let arregloPar = [];
    for(let i = 0;i<array.length;i++)
    {
       if(array[i]%2 == 0) 
       {
        arregloPar.push(array[i]);
       }
    }
    return arregloPar;
}
function filtrarArregloImpar(array)
{
    let arregloImpar = [];
    for(let i = 0;i<array.length;i++)
    {
       if(array[i]%2 == 1) 
       {
        arregloImpar.push(array[i]);
       }
    }
    return arregloImpar;
}
console.log(filtrarArregloPar(array));
console.log(filtrarArregloImpar(array));

console.log(array.filter((array)=>array%2==0));
console.log(array.filter((array)=>array%2==1));
//6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.
let arregloDuplicado = [2,2,1,5,1,10,2,4,6];
function borrarDuplicados(array){
    return [... new Set(array)];
}
console.log(arregloDuplicado);
arregloDuplicado = borrarDuplicados(arregloDuplicado);
//7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente.
console.log(arregloDuplicado.sort((a,b) => a-b));

//8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.
let numeros = [1, 2, 3, 4, 2, 5, 2];
function borrarOcurrencias(array,valorAborrar)
{
    return array.filter(elemento => elemento !== valorAborrar);
}
console.log(borrarOcurrencias(numeros,2));
/*9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya
duplicados.*/
let arrayCombinado = numeros.concat(arregloDuplicado);
console.log(arrayCombinado);
console.log(borrarDuplicados(arrayCombinado));