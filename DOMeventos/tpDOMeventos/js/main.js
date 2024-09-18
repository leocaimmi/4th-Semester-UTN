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
/**Ejercicio 7: Añade un evento que escuche cuando se presione una tecla en el documento y muestre el código de la tecla presionada en un elemento `<p>`. */
const ejercicioSiete = document.getElementById('ejercicioSiete');
document.addEventListener('keydown', (event) => {
    ejercicioSiete.textContent = `Key: ${event.key}, Code: ${event.code}`;
});
/**Ejercicio 8: Crea una lista de elementos `<li>`. Al hacer clic en un elemento de la lista, cambia su color de fondo. */
const lista = document.querySelectorAll(`#listaOcho li`);
lista.forEach((e)=>{e.addEventListener('click', () => {
   e.style.backgroundColor = 'lightblue'; // Cambia el color de fondo del elemento
   
});
});
/**Ejercicio 9: Implementa un contador que incremente en 1 cada vez que se haga clic en un botón. */
const contadorAdd = document.getElementById(`contadorAdd`);
contadorAdd.onclick = ()=>{
   const parrafo = document.getElementById(`contador`);
   let valor = parseInt(parrafo.textContent);
   parrafo.textContent = valor+1;
   
};
const contadorDelete= document.getElementById(`contadorDelete`);

contadorDelete.onclick = ()=>{
   const parrafo = document.getElementById(`contador`);
   parrafo.textContent = 0;
   
};
/**Ejercicio 10: Crea una galería de imágenes. Al hacer clic en una imagen, muestra su descripción en un elemento `<p>`. */

const imagenes = document.querySelectorAll(`.galeria img`);
imagenes.forEach((img)=>{
   img.addEventListener(`click`,function(){//recorre las imagenes cuando las clickeo
   const descripción = this.getAttribute('data-description');//agarro el atributo DATA
   console.log(descripción);
   document.getElementById('descripcion').textContent = descripción;//pongo el txt
   });
});
 












