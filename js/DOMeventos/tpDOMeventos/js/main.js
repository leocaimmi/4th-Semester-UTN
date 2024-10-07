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
miBoton.onclick = () => { (alert("Hiciste click")) };
/**Ejercicio 5: Agrega un evento que cambie el color de fondo de un elemento `<div>` al pasar el
mouse sobre él y lo restaure cuando se retire el mouse. */
const miDivBoton = document.getElementById(`divBoton`);
miDivBoton.addEventListener(`mouseenter`, () => { miDivBoton.style.backgroundColor = "red" });
miDivBoton.addEventListener(`mouseleave`, () => { miDivBoton.style.backgroundColor = "white" });

/**Ejercicio 6: Crea un formulario con un campo de texto y un botón. Al hacer clic en el botón, muestra el valor del campo de texto en un elemento `<p>`. */
const textoAgregar = document.getElementById(`inputForm`);
const botonForm = document.getElementById(`BotonForm`);
botonForm.onclick = () => {
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
lista.forEach((e) => {
   e.addEventListener('click', () => {
      e.style.backgroundColor = 'lightblue'; // Cambia el color de fondo del elemento

   });
});
/**Ejercicio 9: Implementa un contador que incremente en 1 cada vez que se haga clic en un botón. */
const contadorAdd = document.getElementById(`contadorAdd`);
contadorAdd.onclick = () => {
   const parrafo = document.getElementById(`contador`);
   let valor = parseInt(parrafo.textContent);
   parrafo.textContent = valor + 1;

};
const contadorDelete = document.getElementById(`contadorDelete`);

contadorDelete.onclick = () => {
   const parrafo = document.getElementById(`contador`);
   parrafo.textContent = 0;

};
/**Ejercicio 10: Crea una galería de imágenes. Al hacer clic en una imagen, muestra su descripción en un elemento `<p>`. */

const imagenes = document.querySelectorAll(`.galeria img`);
imagenes.forEach((img) => {
   img.addEventListener(`click`, function () {//recorre las imagenes cuando las clickeo
      const descripción = this.getAttribute('data-description');//agarro el atributo DATA
      console.log(descripción);
      document.getElementById('descripcion').textContent = descripción;//pongo el txt
   });
});
/**Ejercicio 11: Agrega un botón que oculte o muestre un elemento `<div>` con el id "miDiv". */


const botonOcultar = document.getElementById(`ocultar`);
botonOcultar.addEventListener(`click`, () => {
   const miDivOcultar = document.getElementById(`miDivOcultar`);

   if (miDivOcultar.style.display === 'none') {
      miDivOcultar.style.display = 'block';  // Mostrar el div
      botonOcultar.textContent = "OCULTAR";
   } else {
      miDivOcultar.style.display = 'none';   // Ocultar el div
      botonOcultar.textContent = "DESOCULTAR";
   }

});
/**Ejercicio 12: Crea un menú desplegable (select) con tres opciones. Al seleccionar una opción, muestra un mensaje con el valor seleccionado. */

const select = document.getElementById(`miSelect`);
select.addEventListener(`click`, () => {
   const parrafo = document.getElementById(`opcionSelect`);
   //parrafo.textContent = opcionSelecionada.value;//agarro el value del select
   parrafo.style.color = "red";
   const indiceSeleccionado = select.selectedIndex;//selecciono el indice 
   const textoSeleccionado = select.options[indiceSeleccionado].text;//agarro el txt
   parrafo.textContent = `El texto seleccionado es: ${textoSeleccionado}`;

});

/**Ejercicio 13: Implementa un reloj digital que muestre la hora actual y se actualice cada segundo. */

const relojDigital = document.getElementById('reloj');

function actualizarReloj() {
   const fecha = new Date();
   const horas = agregarCero(fecha.getHours());
   const minutos = agregarCero(fecha.getMinutes());
   const segundos = agregarCero(fecha.getSeconds());
   relojDigital.textContent = `${horas}:${minutos}:${segundos}`;
}
actualizarReloj();//funciona desde que arranca la pagina

setInterval(actualizarReloj, 1000);//se actualiza cada segundo

function agregarCero(num) {
   return num.toString().padStart(2, '0');// tengan dos dígitos
}
/**Ejercicio 14: Crea una tabla con filas y columnas. Al hacer clic en una celda, cambia su contenido. */
const celdas = document.querySelectorAll(`#tabla td`);
celdas.forEach((e) => {
   e.addEventListener(`click`, function () {
      const nuevoContenido = prompt("Ingrese el texto", this.innerHTML);
      if (nuevoContenido) {
         this.innerHTML = nuevoContenido;
      }
   })
});
/** Ejercicio 15: Agrega un formulario de contacto que valide que se ingrese un correo electrónico válido antes de enviar el formulario.*/

/**Ejercicio 16: Implementa una calculadora básica que realice operaciones de suma, resta, multiplicación y división. */

const numero1 = document.getElementById(`num1`);
const numero2 = document.getElementById(`num2`);
const resultadoCalculo = document.getElementById(`resultadoCalc`);
const botonSumar = document.getElementById(`sumar`);
const botonRestar = document.getElementById(`restar`);
const botonMultiplicar = document.getElementById(`multiplicar`);
const botonDividir = document.getElementById(`dividir`);

botonSumar.addEventListener('click', function () {
   const num1 = parseFloat(numero1.value);
   const num2 = parseFloat(numero2.value);
   resultadoCalculo.style.color = "green";
   if (isNaN(num1) || isNaN(num2)) {
      resultadoCalculo.style.color = "red";
      resultadoCalculo.textContent = "Por favor, ingresa números válidos.";
   } else {
      resultadoCalculo.textContent = `resultado:${num1 + num2}`; // Suma
   }
});

botonRestar.addEventListener('click', function () {
   const num1 = parseFloat(numero1.value);
   const num2 = parseFloat(numero2.value);
   resultadoCalculo.style.color = "green";
   if (isNaN(num1) || isNaN(num2)) {
      resultadoCalculo.style.color = "red";
      resultadoCalculo.textContent = "Por favor, ingresa números válidos.";
   } else {
      resultadoCalculo.textContent = `resultado:${num1 - num2}`; // Resta
   }
});

botonMultiplicar.addEventListener('click', function () {
   const num1 = parseFloat(numero1.value);
   const num2 = parseFloat(numero2.value);
   resultadoCalculo.style.color = "green";
   if (isNaN(num1) || isNaN(num2)) {
      resultadoCalculo.style.color = "red";
      resultadoCalculo.textContent = "Por favor, ingresa números válidos.";
   } else {
      resultadoCalculo.textContent = `resultado:${num1 * num2}`; // Multiplicación
   }
});

botonDividir.addEventListener('click', function () {
   const num1 = parseFloat(numero1.value);
   const num2 = parseFloat(numero2.value);
   resultadoCalculo.style.color = "green";
   if (isNaN(num1) || isNaN(num2)) {
      resultadoCalculo.style.color = "red";
      resultadoCalculo.textContent = "Por favor, ingresa números válidos.";
   } else if (num2 === 0) {
      resultadoCalculo.style.color = "red";
      resultadoCalculo.textContent = "No se puede dividir por 0."; // Validación de división por cero
   } else {
      resultadoCalculo.textContent = `resultado:${num1 / num2}`; // División
   }
});
/**Ejercicio 17: Crea un juego de "Adivina el número" en el que el programa genera un número aleatorio y el usuario debe adivinarlo. */
const botonAdivinar = document.getElementById(`Consultar`);
// Generar un número aleatorio al iniciar el juego

botonAdivinar.addEventListener('click', function () {
   const numeroAdivinar = document.getElementById('adivinador').value; // Obtener el valor del input
   const numero = parseFloat(numeroAdivinar); // Convertir el valor a número
   let numeroRandom = Math.floor(Math.random() * 101);
   parrafoAdivinar.style.color = "black";

   if (isNaN(numero)) {
      parrafoAdivinar.style.color = "red";
      parrafoAdivinar.textContent = 'Por favor, ingresa un número válido.';
   } else {
      if (numero === numeroRandom) {
         parrafoAdivinar.style.color = "green";
         parrafoAdivinar.textContent = `¡El número ${numero} es correcto! ¡Has ganado!`;
      } else if (numero < numeroRandom) {
         parrafoAdivinar.textContent = `El número seleccionado ${numero} es muy bajo. El numero es ${numeroRandom}. Intenta de nuevo.`;
      } else {
         parrafoAdivinar.textContent = `El número seleccionado ${numero} es muy alto. El numero es ${numeroRandom}. Intenta de nuevo.`;
      }
   }
});




























