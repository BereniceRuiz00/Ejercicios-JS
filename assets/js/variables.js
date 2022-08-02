// Mejores prácticas

/* camelCase
Utilizar mayúsculas en la mitad de nuestras variabeles
Ejemplos: variableTriangulo, miNombre, miEdad
*/

/* Palabras reservadas
No usar palabras reservadas para declarar una variable
Ejemplos: if, return, true, false, for, while, let, var, etc.
var while;
var null ;
var if;
var true;
var false;
var var;
var const;
var let;
*/

/* Seguir standar personal
Pueden contener números, letras, guion bajo, simbolo de dolar
*/

var a;
var a1;
var a_Nombre;
var a$Direccion;

// Normalizar datos que se van a ingresar 
 var tel = "+52 448 234 1212";

// Declaración de variables

// Type number
var edad = 22;
var peso = 86;
var miopia = 1.5;

// Type Boolean
var ciego = true;
var hambre = true;
var bateria = false;

// Type String
var nombre = "Berenice Ruiz";
var dir = "Guadalupe, Nuevo León";
var nacionalidad = "Mexicana";

// Type Null
var ganasDeVivir = null;
var nineros = null;

// Variables declaradas con un mismo valor
var x, y, z = 4;
var uno = dos = tres = 4;

// Variables undefined
var xx, yy, zz;

// Escribir en una sola linea variables undefined de nuestro carrito de compras

var producto;
var cantProducto;
var precioProducto;
var precioSubtotal;
var precioTotal;
var metodoDePAgo;

/*Nueva Funcion 
typeOF();
Nos indica el tipo de dato al que pertenece nuestra variable*/
var a =2;
typeof (a);
// s'number'
var b = "2";
typeof (b);
// 'string'
var c = true;
typeof(c);
// boolean;
var d = null;
typeof (d);
// object < Object de JavaScript

// isNaN() es una funcion que nos permite verificar  si un dato es o no un numero

// NaN es tal cual un tipo de dato en JavaScript
isNaN (NaN);
// true

var e = NaN;
isNaN(e);
// true
typeof (e);
// number

// Convertir number to string
String(x);


// 
var a = 1;

let a = 1;

// Constante
// Variable con dato que jamas va a cambiar
// Un solo valor, no deben cambiat y no se puede cambiar
const a = 1;


// Arreglos

const carros = ["BMW","Volvo", "Mercedes"];
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

// Ubicacion empieza desde 0
carros [2];
// "Mercedes"
