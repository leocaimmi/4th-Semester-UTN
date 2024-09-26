import { getTareaByID, putTarea } from "./api.js";
import { Tarea } from "../tarea/Tarea.js";

const parametro = new URLSearchParams(window.location.search);
const inputTarea = document.getElementById(`tarea`);
document.addEventListener("DOMContentLoaded",async()=>{
try {
    console.log(parametro.get(`idTarea`));
    const tarea = await getTareaByID(parametro.get(`idTarea`));
    inputTarea.value =tarea.nombre;
} catch (error) {
    console.log(error);
}
});

const form = document.getElementById(`formulario`);
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    try {
        const tarea1 = new Tarea(inputTarea.value);
        putTarea(parametro.get(`idTarea`),tarea1);
        window.location.href ="index.html";
    } catch (error) {
        console.log(error);
    }
});