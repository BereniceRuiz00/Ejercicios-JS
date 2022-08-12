/*

*Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

Elementos de la Programacion Orientada a Objetos

    - Clases: Plantilla que nos sirve para crear objetos. 
    - Objetos: Elementos creados a partir de la plantilla.
    - Propiedades o atributos: Informacion que tiene un elemento.
    - Metodos o funciones: Lo que hacen y como lo hacen. (accines que puede realizar)
    - Constructores: Son quienes construyen al objeto tomando en cuanta a la plantilla
    - Instanciar: Crear o materializar el objeto.
    

Ejemplo de los gatitos:

    - Mama y papa gatitos: Clase
    - Gatitos bebes: Objeto
    - Color de los gatitos: Atributos o caracteristicas
    - Maullar y ronronear: Metodos o funciones
    - Tener un gatito para darle todo nuestro amor: Instanciacion o materializacion


Ejemplo de las casas:
    
    - Plano de la casa: Clase o plantilla
    - Casitas: Objetos
    - Cantidad de niveles que hay en una casa: atributos
    - Abrir estacionamiento: Metodo o funcion
    - Personal de construccion: Constructores
    - Tener la casa lista para vivir: Instanciacion o materializacion


*/

// Ejemplo de los gatitos

const gatitobere = {
nombre:"Bere",
peso:"10kg",
color:"Gris",
edad:"1",
colorOjos:"negros",
raza:"persa",
sexo:"macho",
vacunas:"true",
numeroBigotes:"25",
tipoPelo:"corto",
manchas:false,
imagen:"persa.jpg"
}

const bigotes = {
    nombre:"Bigotes",
    peso:"10kg",
    color:"Gris",
    edad:"1",
    colorOjos:"negros",
    raza:"persa",
    sexo:"macho",
    vacunas:"true",
    numeroBigotes:"25",
    tipoPelo:"corto",
    manchas:false,
    imagen:"bigotes.jpg"
    }

console.log(gatitobere);
console.log(gatitobere.nombre);
console.log(gatitobere.raza);
console.log(gatitobere.vacunas);
console.log(gatitobere.numeroBigotes);
console.log(gatitobere.imagen);




// 1 .plantilla para crear muchos gatitos

class gatito {
    nombre = "";
    color = "";
    edad = 0;
    raza = "";

// 3. Crear un cosntructor dentro de la clase
constructor(nombre, color, edad, raza){//necesitamos pasar los parametros
    this.nombre = nombre;
    this.color =color;
    this.edad = edad;
    this.raza = raza;
}

// 2. Defino mis metodos como funciones, por que con estas funciones realizar acciones

function maullar (){
    console.log("Miau");
}

function dormir(){
    console.log("ZZzzzzz");
}

function ronronear(){
    console.log("prrr");
}

}

// Crear gatitos

let kitty = new gatito("kitty", "blaco", 66, "japonesa");
let garfield = new gatito("Garfield","naranja",25,"persa");
let boladeNieve = new gatito("Bola de niieve","blanco",5,"nose");

console.log(kitty);
console.log(garfield);
console.log(boladeNieve);

kitty.maullar();
