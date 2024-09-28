/**Ejercicio 1: Crea una Promise que se resuelva después de 2 segundos y muestra un mensaje
cuando se resuelva. */


/*const mostrarConDelay = () => {
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

/*const duplicarNumeroPromise =(num) =>{
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

    /**Ejercicio 3: Crea dos Promises que se resuelvan después de 3 segundos cada una. 
     * Combina ambas Promises para mostrar un mensaje cuando ambas se hayan resuelto. (Pista: usar Promise.all) */

const sumarPromise = (num1,num2) =>{
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      const exito = true;
      if(exito)
      {
        resolve(num1+num2);
      }else{
        reject("Se rompio todo");
      }
    },3000);
  })
};
const restarPromise = (num1,num2) =>{
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      const exito = true;
      if(exito)
      {
        resolve(num1-num2);
      }else{
        reject("Se rompio todo");
      }
    },3000);

  })
}
Promise.all([sumarPromise(2,2),restarPromise(3,4)])
  .then((resultado)=>{
    
    console.log(resultado[0]);
    console.log(resultado[1]);

  })
  .catch((error)=>{
    console.log(error);
  })

/**Ejercicio 4: Crea una función que simule una solicitud HTTP asincrónica utilizando setTimeout y
 *  devuelva una Promise que se resuelva con un objeto JSON después de 2 segundos. */

function simulacionSolicitudHttp() {
  return new Promise((resolve, reject) => {
    // Simulamos una solicitud HTTP con setTimeout
    setTimeout(() => {
      // Creamos un objeto JSON para resolver la Promise
      const datos = {
        id: 1,
        nombre: 'Producto de prueba',
        precio: 100
      };

      // Resolvemos la Promise con los datos JSON
      resolve(datos);
    }, 2000); // Se espera 2 segundos antes de resolver la Promise
  });
}

// Uso de la función simulando una solicitud HTTP
simulacionSolicitudHttp()
  .then((resultado) => {
    console.log('Respuesta:', resultado);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

  /**Ejercicio 5: Crea una función que acepte un arreglo de números y
   *  devuelva una Promise que se resuelva con la suma de los números después de 1 segundo. (Usar reduce) */


  const probarArreglo = function(arreglo){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(arreglo.reduce((acumulador,e)=>acumulador+e,0));
      },1000)
    });

  }
  probarArreglo([1,2,3,4])
    .then((resultado)=>{
      console.log(resultado);
    })


















