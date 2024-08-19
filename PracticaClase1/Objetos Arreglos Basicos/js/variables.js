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
