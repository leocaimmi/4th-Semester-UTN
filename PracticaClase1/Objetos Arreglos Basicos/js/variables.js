//1. Crear un Objeto Literal
//• Crea un objeto literal llamado “persona” con las propiedades “nombre”,
//“edad” y “profesión”. Asigna valores a cada propiedad y muestra el objeto
//en la consola.
const persona ={
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
const numeros =[1,2,3,4,5];
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
for(let i = 0;i<numeros.length;i++)
{
    console.log(numeros[i]);
}
for(let i of numeros)
    {
        console.log(i);
    }
    numeros.forEach((valor)=>{console.log(valor)});