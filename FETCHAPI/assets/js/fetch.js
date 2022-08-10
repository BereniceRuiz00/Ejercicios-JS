/**
    
    Dentro de los navegadores tenemos 2 tipos de APIs:

    - APIs nativas: Como el DOM que es el API que nos permite acceder al codigo HTML de nuestros  documentos a traves de JS

    - APIs externas: Como las APIs de Twitter que nos permite obtener los ultimos tweets del usuario, o a la de GitHub que nos permite obtener la informacion de los repositorios de una cuenta. 

    Ejemplos de APIs WEB

    - DOM
    - XMLHttpRequest: Peticiones al servidor
    - fetch: API nos permite hacer peticiones al servidor
    - sessionStorage
    - localStorage


    FETCH API
    Asincronismo
    Sincronismo


*/
// Ejemplo de JavaScript Sincrono
console.log ("Inicio Sincrono"); //1
function dosSincrono (){
    console.log("Dos");
}
function unoSincrono(){ 
    console.log("Uno");//2
    dosSincrono(); //3
    console.log("Tres"); //4
}
unoSincrono();
console.log("Fin de Sincrono");//5

//Cual es la salida de este codigo 1,2,3


// Ejemplo de JS asincrono

console.log("Inicio asincrono");
function dos(){
    setTimeout(function(){
        console.log("Dos");
    },200);
}

function uno(){
    setTimeout(function(){
        console.log("Uno");
    },0);
    dos();
    console.log("tres");
}

uno();
console.log("Fin de Asincrono");

// Salida: 3,1 y 2

/*
    Ejemplos de tareas asincronas

    - Fecth a una URL pafra obtener un archivo JSON
    - Tareas programadas con setTimeout
    - Spitify, al momento de reproducir un .mp3
    
    Mecanismo asincronos en JS, podemos usar alguno d eestos mecanismo:

        -Callbacks
        -Promises
        -Async/
        
Promesas (promises)

Como su nombre lo indica, es algo que de principio no sabemos si se cumplira, por que pueden pasar muchas cosas. La gran ventaja de usar promesas, es poder usar una sola funcion que haga todo el trabajo, que el codigo sea mas estilizado y poder manejar de mejor forma los dos escenarios posibles: si la promesa se cumple, o no.

Una promesa es el resultado de la operacion asincrona, este resultado es en forma de objeto el cual puede estar disponible AHORA o en el FUTURO. Aunque esta operacion puede finalizar exitosamente o fallar, la promesa nos permite saber cuando una operacion finaliza, independientemente del resultado.

Las promesas tienen 3 estados posibles:
    - Pending: Estado inicial, cuando se crea la promesa. 
    - Fullfilled: Cuando la operacion asincrona se completa con exito (resolve)
    - Rejected: Cuando la operacion asincrona falla (reject)

Nuestras promesas tienen algunos metodos: 
    - then(function resolve): Ejecuta la funcion resolve cuando a promesa se cumple
    - catch (function reject): Ejecuta la funcion rechazado cuando la promesa no se cumple.
    
    - then(function resolve, function reject): Ejecutar las dos funciones resolve y reject
    - finally(fucntion end): Ejecutar la funcion end si se cumple o no la promesa.
    

    /Ejemplo archivos de Felipe
 Pending: Cuando Felipe promete enviar los archivos (o cuando nos deja en visto)
- Fullfilled: Cuando Felipe los envia
- Rejected: Cuando no los envia o cuando avisa que no los puede enviar.

    Ejemplo de los archivos de Felipe
    - then (funcion archivosEnviados)
    - catch (funcion felipeNoCumple)
    - finally (funcion promesaTerminada)

    
*/



// Ejemplo d epromesa para saber el nombre

let nombre = "BRE";

const promesaNombre = new Promise((resolve,reject) => {
    if(nombre!=="BERE") reject("Error!!,el nombre no es BERE");
    resolve(nombre);
});
console.log(promesaNombre);


// Promesa de AMOR
var promesaDeAmor = new Promise((resolve,reject) => {
   setTimeout(function(){
    resolve("Si si quiero salir contigo");
   },5000);
});
promesaDeAmor.then(function(valor){
    console.log(valor);
});
console.log(promesaDeAmor)

// Promesa TORTA

let desicion = "Si";

const promesaTortas = new Promise((resolve,reject) => {
    if(desicion!=="Si") reject("No hay tortas");
    resolve(desicion);
});
console.log(promesaTortas);


/**
    Fetch API
Es el nombre de una nueva API (nativa) para JS con la cual podemos realizar peticions HTTP asincronas utilizando promesas, y de forma que el codigo sea un poco mas sencillo y legible. La forma de utilizar una peticion fetch es sencilla, solo debemos llamar a fetch y pasarle por parametro una URL de la peticion a realizar

*/

//const solicitud = fetch('la url que vamos a consultar')
//Guardo en una constante llamada solicitud, la consulta que hago a una pagina externa



fetch("https://pokeapi.co/api/v2/pokemon/ditto") //realizamos la peticion a la URL de la API Pokemon.
    .then(datos => {//cuando te conectes al servidor ejecutamos la siguiente funcion
        return datos.json();//traeme todos los pokemon, y como se que los  traes en texto, yo los convierto en formato JSON
    })
    .then(info => {//cuando la promesa se resuelve, entoncesejecutamos esta funcion. Usamos el metodo then para obtener la respuesta de la promesa y guardarla en una variable llamada info. Gracias a esta variable puedo almacenar al info de mi pokemon y scar de ahi los datos que necesite
        console.log("El nombre de nuestro pokemon es: ",info.name, "y su numero es: ",info.id);
    });