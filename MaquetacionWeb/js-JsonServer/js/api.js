const urlBase = "http://localhost:3000/tareas";
//GET
export async function getTareas() {
    try {
        const response = await fetch(urlBase);
        if(!response.ok){
            throw new Error("HTTP request error "+ response.status);
        }
         
        return await response.json();
    } catch (error) {
        if(error instanceof TypeError){//type error es un error en la web
            console.error("Error en la red");
        }{
            console.error("Error al obtener los datos de la tarea");
        }
        throw error;
    }
}
//GET POR ID
export async function getTareaByID(id) {

    try {
        const response = await fetch(`${urlBase}/${id}`);
        if(!response.ok){
            throw new Error("HTTP request error "+ response.status);
        }
        return await response.json();
    } catch (error) {
        if(error instanceof TypeError){
            console.error("Error en la red");
        }else{
            console.error("Error al obtener los datos de la tarea");
        }
        throw error;
    }
    
}
// no se utiliza tanto
/*export function getTareas2() {
    fetch(urlBase)
    .then(response =>response.json)
    .then(data =>data)
    .catch(error =>console.error("Error"));
}*/

//POST
export async function postTarea(tarea) {
    try {
        const response = await fetch(urlBase,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(tarea)//hago que la tarea sea un JSON
        })
        if(!response.ok){
            throw new Error("HTTP request error"+response.status);
        }
        return await response.json();
    } catch (error) {
        if(error instanceof TypeError){
            console.error("Error red");
        }else{
            console.error("Error ala grabar la tarea");
        }
        throw(error);
    }
    
}
//PUT
export async function putTarea(id,tarea) {
    try {
        const response = await fetch(`${urlBase}/${id}`,{
            method: "PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(tarea)
        });
        if(!response.ok){
            throw new Error("HTTP request error "+response.status);
        }
        return await response.json();
    } catch (error) {
        if(error instanceof TypeError){
            console.error("Error en la red");
        }else{
            console.error("Error al modificar la tarea");
        }
    }
}
//DELETE
export async function deleteTarea(id) {
    try {
        const response = await fetch(`${urlBase}/${id}`,{//http:localhost:3000/tareas/1
            method: "DELETE",
            headers: {"Content-Type":"application/json"},
        })
        if(!response.ok){
            throw new Error("HTTP request error"+response.status);
        }
        return await response.json();
    } catch (error) {
        if(error instanceof TypeError){
            console.error("Error red");
        }else{
            console.error("Error ala grabar la tarea");
        }
        throw(error);
    }
    
}