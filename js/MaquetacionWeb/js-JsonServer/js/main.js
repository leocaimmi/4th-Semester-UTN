import { deleteTarea, getTareas, postTarea } from "./api.js";
import { Tarea } from "../tarea/Tarea.js";

document.addEventListener(`DOMContentLoaded`,async()=>{//se ejecuta por ultimo

try {
    const lista = await getTareas();// si no uso ASYNC AWAIT DEBO USAR .then...
    //console.log(lista);
    crearTabla(lista);

} catch (error) {
    console.log(error);
}

});

function crearTabla(lista){
    lista.forEach(tarea => {
        crearFila(tarea);
    });
}

function crearFila(tarea){
    const tr =document.createElement('tr');
    const tdNombre = document.createElement('td');
    tdNombre.textContent = tarea.nombre;
    const tdId = document.createElement('td');
    tdId.textContent = tarea.id;
    const tdEliminar = document.createElement('td');
    tdEliminar.innerHTML = '<a href="" >Eliminar</a>'
    tdEliminar.addEventListener('click',()=>{
        try {
            if(confirm('¿Desea confirmar la eliminacion?')){
                deleteTarea(tarea.id);
            }
        } catch (error) {
            console.log(error);
        }
    });
    const tdModificar = document.createElement('td');
    tdModificar.innerHTML = `<a href= "modificar-tarea.html?idTarea=${tarea.id}">Modificar</a>`;

    const lista = document.getElementById('listaTareas');

    tr.append(tdId,tdNombre,tdEliminar,tdModificar);//agrega como hijos

lista.appendChild(tr);
    
}
const formulario = document.getElementById("formulario");
const input = document.getElementById("tarea");
formulario.addEventListener('submit',async ()=>{
    try {
        const tarea = new Tarea(input.value);
        await postTarea(tarea);
    } catch (error) {
        console.log(error);
        
    }
});