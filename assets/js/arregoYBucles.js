 /* 

 Arrays o Arreglos

 Definicion:

 Un arreglo es un conjunto de datos que se pueden almacenar en una sola variable

 Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos.

 Ejemplo 1:

 var dato = "Bere"; variable con un solo dato
 var arreglo = ["roca", "piedra"]; arreglo con muchos datos.

 var datosprimitivos = ["Hola",23,null,true,undefined] arreglos con varios tipos de datos


----- Formas de crear un array --------

1.- Primera Forma

Utilizando La palabra reservada "new Array". En esta primera forma nosotras creamos un array usando La palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esto vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar Los datos).

var colores = new Array(3); //Esto forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y yo le asignamos los valores en Las posiciones que queremos mostrar.

var colores = new Array(5);
var morcaDeCatores = new Array("Mopito", "Prismacolor", "BlancaNieves", "Faber Castell", "Norma", "Crayola");

2.- Segunda Forma

La segunda forma se trata de crear el arreglo solo usando corchetes []. 

Esta forma es la mas usada para crear arreglos en JS.

var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];

//Ejemplos de Arreglos

listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
console.log(listaDePerritos);

//Ejemplo de Arreglo 2

listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)



----Acceder a los elementos de un Array

* Posicion de los elementos, donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices.

Ejemplo:
0: Pan
1: Leche
2: Queso

* Número de elementos no es lo mismo que numero de posición

 */

// Ejemplo de posicion arreglo

// console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
// console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
// console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
// console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

//Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.


/* 
    Array Asociativo 

Son arreglos en donde cada elementos estan asosciado no solo con su indice si no que tambien esta asignado a un identificador 

*/

let propiedadesDeMiComputadora = {
    marca:"Azus", //marca es el identificador, "Azus" es el valor
    procesador:"Inte I7", 
    ram:"15 GB", 
    almacenamiento:"512 GB",
    precio:"15,000"
};

 console.log(propiedadesDeMiComputadora);
 console.log("La RAM de mi computadora es de: "+ propiedadesDeMiComputadora["marca"]);

 let publicacion ={
    nombre: "Bere",
    usuario: "BereR",
    fecha: "Lunes",
    likes: "Descripcion",
    descripcion: "Bonita foto",
    ubicacion: "Monterrey"
 };

 console.log("Traeme la informacion de los likes:  " + publicacion["likes"]);

 /*
 Métodos de los array

 En los arreglos, tenemos ciertos métodos o instrucciones que nos van a permitir manipular los elementos de este arreglos. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

 Podemos dividir estos métodos en 3:

    -Métodos transformadores
    -Métodos accesores
    -Métodos repetitivos 

*/

var arrayDeEjemplo = ["Manzanas","Peras", "Mangos", "Mandarinas", "Uvas", "Sandia","Fresas"];

console.log("Este es nuestro arreglo Original de 7 elementos" + arrayDeEjemplo);


//Metodos transformadores

//push(): Agrega un elemento al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo: ", arrayDeEjemplo);

//pop(): Eliminar el ultimo elemento del arreglo
arrayDeEjemplo.pop(); //con pop no hace falta especificar el dato
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

// unshift (): Agregamos elementos en el principio del arreglo
arrayDeEjemplo.unshift("Bananas","Tunas","Aguacate","Lichi");
console.log("Agregamos elementos en el primer elemento del arreglo ", arrayDeEjemplo);

//shift(): Eliminar el primer elemento del arreglo
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);

// slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copando el arreglo (no se modifica nada, si no creamos una copia)

var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo2 = saludo1.slice(1, 7);

console.log("Imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo cortado", saludo3);

var saludo3 = saludo1.slice(-9);
console.log("Imprimimos la rebanada del arreglo cortado", saludo3);

/* splica(); Modificar el arreglo en 3 formas distintos

- Eliminar 
- Agregar nuevos elementos
- Reemplazar elementos que ya existen en el arreglo

Sintaxis basica

splice(indice de inicio, candidad de elementos a eliminar, nuevo elemento, nuevo elemento2, etc.)

    - Indice de inicio: la posicion donde comenzamos a eliminar elementos(primer numero dentro del parentesis)
    - Cantidad de eelementos a eliminar: (segundo numero del parentesis)
    - elementos a agregar: los nuevos eleemntos que se agregan al parentesis

*/

let mesesdelAnio= ["Enero","Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arreglo de los meses del anio: ", mesesdelAnio);

// Eliminar datos usando splice

let mesesBorrados = mesesdelAnio.splice(2, 2, "Abril","Mayo");
console.log("Este es el nuevo arreglo mesesBorrados", mesesdelAnio);


// Agregar elementos sin borrar nada del arreglo

let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(7,0,"Jueves", "Viernes","Sabado");

console.log("Los nuevos dias de la semana son: ", diasSemana[3]);

/*
 Metodos Accesores

 */
 var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//  Length(): Nos permite saber el numero de los elementos o longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada ", ensalada.length);

// join(): Nos permite unir los lementos del arreglo con una cadena de texto

console.log("esta es una berensalada: ",ensalada.join(" Ber"));

// concat(); Nos permite unir dos o mas arrays en una scrollbars. Devuelve un nuevo arreglo con los elementos de otro.
let dulces = ["galletas", "chetos", "glorias", "gansitos", "galletas",  "picafresas", "tamborines", "galletas"];

let mezcla = dulces.concat(ensalada);
console.log("Esta es mi mezcla: ",mezcla);

// indexof(): Nos permite conocer la posicion de un elemento dentro del arreglo
console.log("Me gustaria conocer la posicion de los chetos del arreglo dulces", dulces.indexOf("chetos"));

// lastindexOf (): Nos permite saber la ultima posicion de un elemento determinado dentro de un arreglo

console.log("la ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));

// toString(): Nos permite convertir el array en una cadena de texto
console.log(dulces.toString());

// valueOf (): Nos permite devolver el valor de nuestro arreglo
console.log(ensalada.valueOf());

// includes(): Nos permite saber si un eleemnto existe dentro de un arreglo
console.log(dulces.includes("papitas"));


/*
    Métodos repetidores 
*/

// filter(): Recorre el array y devuelve una nueva con los elementos que cumplan la condicion. (Es como un bucle).

var numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Numeros del 1 al 10", numeros);

// Filtraremos los datos del arreglo
var numeros1al5 = numeros.filter(numero => numero <5);
console.log("Estos son los numeros que cumplen la condicion al ser menores que 5", numeros1al5);

var numeros6al9 = numeros.filter(numero => numero>=6&&numero <10);
console.log("Estos son los numeros que cumplen la condicion al ser menores que 9", numeros6al9);

// map(): Recorrer el arreglo, modificar los elementos presentes en el y retornar estos valores modificados en uno nuevo con la misma longitud original.

var map = numeros.map(numeros => numeros*3);

console.log("Esta es la tabla del 3", map);


//Ejercicio Improvisado tablas del 1 al 10

var arregloBase = [1,2,3,4,5,6,7,8,9,10];
var tabla2= arregloBase.map(arregloBase => arregloBase *2 );
console.log("Esta es la tabla del 2", tabla2);

// Esta es una tabla que toma una variable global(funciona, pero no es lo que debemos hacer)
var tabla3 = arregloBase.map(numeros => numeros*3);
console.log("Esta es la tabla del 3",tabla3);

/*

forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

    - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
    - Indice: La posicion que tiene el elemento dentro del arreglo
    - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

*/

//Ejemplo para remover el primer numero impar de un arreglo

let listaNumeros = [3, 6, 8, 10, 12,];
let impar = 3;

listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
    if (numero === impar){
        listaNumeros.shift();
    }
});

console.log("Estos son los elementos del array que no son impares", listaNumeros);

///////////////////////////////////////////////////////////////////

/* 
    
    Bucles o Loops

En JS los bucles son utilizados para realizar tareas con base a una  condición , además  de que 
el bucle continuara ejecutandose hasta que la condicion devuelva un false

Normalmente tenemos 3 ciclos:

    - While (mientras)
    - Do while (hacer mientras)
    - For (para)

Tenemos otras sentencias más especificas:

    - for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICION.

    - for of: sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR.

*/

/*

Sentencia WHILE (mientras)

Esta sentencia nos va a permitir recorrer un bloque de codigo
SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

La estructura de While es: 

palabraReservada while (condicion que tiene que ser true){
    //Codigo a ejecutar
}

*/

let numeroParaSumar = 0;
while(numeroParaSumar <18){
console.log("El numeor es menor a 10",numeroParaSumar);
numeroParaSumar ++;
}

// LA sentencia while se ejecuta mientras se sigan obteniendo resultados positivos(true), y hasta que el resultado sea false, se para.

// Práctica grupal: Escribir un programa que pidas al usuario un numero entero positivo y muestre por pantalla todos los numero impares desde 1 hasta ese numero

let numini =1;
let valorlimite = prompt("Hola, por favor ingresa un numero entero positivo que sea el limite");

while(numini<=valorlimite){
    if(numini%2 != 0){
console.log("Impar: ",numini);
}
numini++;
}

/* 

Do while (hacer mientras)

El bucle do while nos sirve para ejecutar una sentencia especificada hasta que la condicion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el qhile preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.

Estructura basica: 

palabraresrvada do {
    // Codigo a ejecutar
}
while(condicion);

*/

// Ejemplo

let numerito = 0; 
do{
    console.log("El numero es: ",numerito);
    numerito ++;
}while(numerito<=10);


/*
    for (para)

Este ciclo sirve para iterar 
- El valor inicial de la variable que vamos a iterar (i=0)
- la condicion que tiene que cumplirse para que el bucle se siga ejecutando (i<5)
- La operacion que se realiza una vez que termina el bucle (i++)

Estructura basica del for: 

for ( valor inicial, condicion, operacion){
}

*/

// Ejemplo

console.log("For");
for(let i = 0; i<10; i++){
    console.log(i);
}


