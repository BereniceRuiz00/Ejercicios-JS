/* Control de Flujo 

    Asignaciones vs Comparaciones
    =               ==
    

*/
const myFunc = () => {
    
};

const nineros = false;
const hambre = true;

alert(nineros == hambre); // false

alert(nineros || hambre); // true

// AND -> todas deben ser true
// true && ture = true
// true && false = false
// false && false = false

// OR -> solo una condicion deber ser true
// true || ture = true
// true || false = true
// false || false = false

// Not -> es la negacion a la condicion
// true => false, false => true

a = 1
a += 5; // a = 6

var hola = "Hola ";
hola += "Mundo"; // "Hola Mundo"

// -----------------------------------------------

// If

let hora = 8;
if (hora == 8) {
    alert("Buen día");
}
if (hora != 8) {
    alert("Buen día");
}

// ----
var hungry = true;
if (hungry == true){
    alert("Tengo mal del porky");
}
else{
    alert("No tengo hambre");
}

// ----
var hour = 12;
if(hour > 0){
    if(hour <=7){
        alert("Good madrugada");
    }else{
        alert("Goo day");
    } 
}else{
    alert("Su hora no existe");
}
// -- Verificar 24 >= hora >0
var nineros2 = prompt("Ingresa tu nineros");

if(nineros2 <= 10){
    alert("Concha de vainilla y 4 picafresas");
}else if (nineros2 <= 50){
    alert("Tacos de canasta");
}else if (nineros2 <= 100){
    alert("Pizza");
}else if (nineros2 <= 500){
    alert("Boneless");
}else {
    alert("Compra casas");
}

// Ejercicio

var edadusu = prompt("ingresa tu año de nacimiento");

if( edadusu <= 2022){
    edadusu = 2022-edadusu;
    if(edadusu > 18){
        alert("Mayor de edad", edadusu);
    }else{
        alert("No es mayor de edad", edadusu);
    }
}else{
    alert("Fecha no valida");

}

// Ejercicio 2

var numero = prompt("Ingrese numero");
if((numero%2)==0){
    alert("es par");
}else{
    alert("no es par");
}


// --------------------------------------2

// switch
// Funcion new Date -> para obtener fecha actual
// var dia = new Date().getDay();
var dia = 8
// break hace mas eficiente el switch al terminar de evaluar al encontrar el case solicitado

function evalDate(dia){
    switch(dia){
        case 0: 
           return  "Sunday";
           break;
    
        case 1:
            return "Monday";
            break;
        
        case 2: 
            return  "Tuesday";
            break;
     
        case 3:
             return "Wednesday";
             break;
       
        case 4: 
            return  "Thursday";
            break;
      
        case 5:
            return "Friday";
            break;
              
        case 6:
            return "Saturday";
            break;    
        
        // Default es como un else, para entradas invalidas
        default:
            return "Su fecha no es vàlida";

    }
}

// alert(evalDate(dia));

// Ejercicio Cartera

var dineros = prompt("Ingrese su deposito");

var compra;

switch(false){

    case (dineros <= 10):
        alert ("Churrumais");
        break;
    
        case (dineros <= 50):
        alert ("McTrio");
        break;
    
       case (dineros <= 100):
        alert ("1/2 kg de Chicarrones");
        break;
    default:
        alert("No hay dineros");
}

