/**Ejercicio 1: Cambia el contenido de un elemento `<p>` con el id "miParrafo" a "Hola, mundo!". */
const parrafo = document.getElementById(`miParrafo`);
parrafo.textContent = "Hola mundo";
console.log(parrafo);
/**Ejercicio 2: Añade una clase "resaltado" a un elemento `<div>` con el id "miDiv".
 */
const miDiv = document.getElementById(`miDiv`);
miDiv.classList.add("resaltado");
console.log(miDiv);
/**Ejercicio 3: Elimina un elemento `<ul>` con el id "miLista" de la página. */
const miLista = document.getElementById(`miLista`);
miLista.remove("miLista");
/**Ejercicio 4: Crea un botón y, al hacer clic en él, muestra un mensaje de alerta que diga "¡Hiciste
clic!".
 */
const miBoton = document.getElementById(`miBoton`);
miBoton.onclick = ()=>{(alert("Hiciste click"))};
/**Ejercicio 5: Agrega un evento que cambie el color de fondo de un elemento `<div>` al pasar el
mouse sobre él y lo restaure cuando se retire el mouse. */
const miDivBoton = document.getElementById(`divBoton`);
miDivBoton.addEventListener(`mouseenter`,()=>{miDivBoton.style.backgroundColor = "red"});
miDivBoton.addEventListener(`mouseleave`,()=>{miDivBoton.style.backgroundColor = "white"});

/**Ejercicio 6: Crea un formulario con un campo de texto y un botón. Al hacer clic en el botón, muestra el valor del campo de texto en un elemento `<p>`. */
const textoAgregar = document.getElementById(`inputForm`);
const botonForm = document.getElementById(`BotonForm`);
botonForm.onclick = ()=>{
   const resultado = document.getElementById(`resultado`);
   resultado.textContent = textoAgregar.value;
};
