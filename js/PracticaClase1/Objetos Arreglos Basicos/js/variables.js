//1. Crear un Objeto Literal
//• Crea un objeto literal llamado “persona” con las propiedades “nombre”,
//“edad” y “profesión”. Asigna valores a cada propiedad y muestra el objeto
//en la consola.
const persona = {
    nombre: "Leo",
    edad: 20,
    profesion: "Software Developer"
}
console.log(persona);
//2. Acceder a Propiedades de un Objeto
//• Accede y muestra en la consola la propiedad “nombre” del objeto
//“persona” creado en el ejercicio 1.
console.log(persona.nombre);
//3. Actualizar una Propiedad de un Objeto
//• Cambia la propiedad “edad” del objeto “persona” a un nuevo valor y
//muestra el objeto actualizado en la consola.
persona.edad = 18;
console.log(persona.edad);
//4. Eliminar una Propiedad de un Objeto
//• Elimina la propiedad “profesión” del objeto “persona” y muestra el objeto
//actualizado en la consola.
console.log(persona);
delete persona.profesion;
console.log(persona);
//5. Agregar una Nueva Propiedad a un Objeto
//• Agrega una propiedad “email” al objeto “persona” y asígnale un valor.
//Muestra el objeto actualizado en la consola.
persona.email = "leo@hotmail.com";
console.log(persona);
//6. Crear un Array de Números
//• Crea un array llamado “numeros” que contenga los números del 1 al 5.
//Muestra el array en la consola.
const numeros = [2, 4, 3, 1, 5];
console.log(numeros);
//7. Acceder a un Elemento de un Array
//• Accede y muestra en la consola el tercer elemento del array “numeros”.
console.log(numeros[2]);
//8. Agregar un Elemento a un Array
//• Agrega el número 6 al final del array “numeros” y muestra el array
//actualizado en la consola.
numeros.push(6);
console.log(numeros);
//9. Eliminar el Último Elemento de un Array
//• Elimina el último elemento del array “numeros” y muestra el array
//actualizado en la consola.
numeros.pop();
console.log(numeros);
//10. Recorrer un Array con un Bucle
//• Usa un bucle “for” para recorrer el array “numeros” y muestra cada
//elemento en la consola.
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for (let i of numeros) {
    console.log(i);
}
numeros.forEach((valor) => { console.log(valor) });
//11. Crear un Array de Objetos
//• Crea un array llamado “productos” que contenga tres objetos, cada uno
//con las propiedades “nombre” y “precio”. Muestra el array en la consola.
class Producto
{
    constructor(nombre,precio)
    {
        this.nombre = nombre;
        this.precio = precio;
    }
}


const producto2 = new Producto("lechuga",500);
const productos = [new Producto("papa",1000),producto2,new Producto("tomate",700)];
console.log(productos);
//12. Acceder a un Valor Dentro de un Array de Objetos
//• Accede y muestra en la consola el precio del primer producto en el array
//“productos”.
console.log(productos[0].precio);
//13. Actualizar una Propiedad en un Array de Objetos
//• Cambia el precio del segundo producto en el array “productos” a un
//nuevo valor y muestra el array actualizado en la consola.
console.log(productos[1].precio = 700);
//14. Eliminar un Elemento de un Array
//• Elimina el primer producto del array “productos” y muestra el array
//actualizado en la consola.
productos.shift();
console.log(productos);
//15. Buscar un Elemento en un Array de Objetos
//• Usa el método “find” para buscar un producto cuyo nombre sea
//"Producto2" en el array “productos” y muestra el producto encontrado en
//la consola.
console.log(productos.find((valor)=>valor === producto2));
//16. Ordenar un Array de Números
//• Ordena el array “numeros” en orden ascendente y muestra el array
//ordenado en la consola.
console.log(numeros.sort((a,b)=>a-b));
//17. Filtrar un Array de Números
//• Usa el método “filter” para crear un nuevo array que contenga solo los
//números mayores que 3 en el array “numeros” y muestra el nuevo array
//en la consola.
const nuevoArray = numeros.filter((valor)=>valor>3);
console.log(nuevoArray);

//18. Crear un Objeto Literal Anidado
//• Crea un objeto “empresa” con las propiedades “nombre”, “ubicación” y
//un objeto anidado “empleados” que tenga una propiedad “cantidad”.
//Muestra el objeto “empresa” en la consola.
const empresa = {
    nombre:"leo",
    ubicacion:"ubicacion",
    empleado:{
        cantidad:"10"
    }

}
console.log(empresa);
//19. Acceder a un Valor en un Objeto Anidado
//• Accede y muestra en la consola la cantidad de empleados del objeto
//“empresa”.
console.log(empresa.empleado);
//20. Combinar Arrays
//• Crea dos arrays, “array1” y “array2”, y usa el método “concat” para
//combinarlos en un solo array llamado “arrayCombinado”. Muestra
//“arrayCombinado” en la consola.
const array1 = [1,3,5];
const array2 = [2,4,6];
const arrayCombinado = array1.concat(array2); 
console.log(arrayCombinado);
console.log(arrayCombinado.sort((a,b)=>a-b));

