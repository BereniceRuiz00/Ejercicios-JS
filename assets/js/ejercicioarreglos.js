// Ejercicio arreglos

let primeravuelta = ["Roberto","Andrea","Jorge","Ramiro","Sofia"];

console.log("Posiciones de la primera vuelta: ", primeravuelta);

// Jorge Adelanta a Roberto

jorge = primeravuelta.splice(2,1,);
primeravuelta.unshift("Jorge");
console.log("Jorge adelanta a Roberto: ",primeravuelta);

// Ramiro adelanta a Jorge
ramiro = primeravuelta.indexOf("Ramiro");
primeravuelta.splice(ramiro,1);
primeravuelta.unshift("Ramiro");
console.log("Ramiro adelanta Jorge: ",primeravuelta);

// Roberto se lesiona y sale de la carrera
primeravuelta.splice((primeravuelta.indexOf("Roberto")),1);
console.log("Roberto se lesiona y sale de la carrera: ",primeravuelta);
// Andrea baja una posicion Ramiro mantiene su lugar y Quinto es remplazado por Jose
primeravuelta.splice((primeravuelta.indexOf("Andrea")),1);
primeravuelta.push("Andrea","Jose");
console.log("Andrea baja una posicion: ",primeravuelta);