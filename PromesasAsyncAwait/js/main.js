/**Ejercicio 1: Crea una Promise que se resuelva después de 2 segundos y muestra un mensaje
cuando se resuelva. */


const mostrarConDelay = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Me resolví");
      }, 2000);
    });
  };
  
  mostrarConDelay()
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.log(error);
    });
    /**Ejercicio 2: Crea una función que acepte un número y devuelva una Promise que se resuelva con el doble del número después de 1 segundo. */

const duplicarNumeroPromise =(num) =>{
    return new Promise((resolve,reject)=>{
       if(typeof num === "number")
       {
           setTimeout(()=>{
               resolve(num*2);
           },1000);
       }else{
           reject(console.log("ERROR, no es un numero"));
       }
    })
};
duplicarNumeroPromise(10)
    .then((resultado) =>{
        console.log(resultado)
    })
    .catch((error)=>{
        console.log(error);
    });









