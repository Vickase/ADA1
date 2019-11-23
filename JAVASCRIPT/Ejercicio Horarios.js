/* 1. Pedir hora en formato hh (24)
2. Imprimir "Buenos dias", "Buenas Tardes" o "Buenas Noches", dependiendo del horario del input.
3. 6 a 14-> Buenos dias
 14 a 19-> Buenas Tardes 
 20 a 6->Buenas noches*/

let hora = prompt("Ingresa una hora del 0 al 24: ");

if (hora >= 6 && hora <= 14) {
  alert("Buenos días");
} else if (hora > 14 && hora <= 19) {
  alert("Buenas Tardes");
} else if ((hora >= 20 && hora <= 24) || (hora >= 0 && hora < 6)) {
  alert("Buenas Noches");
} else {
  alert("Esa hora no existe.");
}

//LOOPS fruit loooops

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

//for
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " es par");
  } else {
    console.log(i + " es inpar");
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    let rdo = "es par";
    console.log(i + ` ${rdo}`);
  } else {
    let rdo = " es impar";
    console.log(i + ` ${rdo}`);
  }
}

for (let i = 1; i <= 20; i++) {
  let rdo;
  if (i % 2 == 0) {
    rdo = "es par";
  } else {
    rdo = " es impar";
  }
  console.log(i + `${rdo}`);
}

//loop contraseña

let contrasenia = "Queen1970";

let contrasenia = "Queen1970";
let pregunta = prompt("Ingrese su contraseña");

while (contrasenia != "Queen1970") {
  pregunta;
  if (contrasenia == "Queen1970") {
    break;
  }
}

let i;

let contrasenia = "perro";
let pregunta = prompt("Ingrese su contraseña");

while (i++) {
  i++;
  if (contrasenia != contrasenia) {
    pregunta;
  } else {
    alert("Bienvenido.");
    break;
  }
}

let contrasenia = prompt("Ingrese su contraseña");

if (contrasenia == "perro") {
  prompt("Bienvenido");
} else {
  while (contrasenia !== "perro") {
    contrasenia = prompt("Ingrese su contraseña");
  }
}

let contrasenia = prompt("Ingrese su contraseña");
if (contrasenia !== "perro") {
  while (contrasenia !== "perro") {
    contrasenia = prompt("Ingrese su contraseña");
  }
} else {
  alert("Bienvenido");
}

// VERSION QUE FUNCIONA ;-;

let contrasenia = prompt("Ingrese su contraseña");
while (contrasenia != "perro") {
  contrasenia = prompt("Ingrese su contraseña");
}
if (contrasenia == "perro") {
  alert("Bienvenido!");
}

let miArray = ["Juanca", "pedro", 16, 34.5, true];

for (let i = 0; i < 5; i++) {
  console.log(miArray[i]);
}

let clave;
let correcto = true;
let listaClaves = ["Perro", "miau1234", "PepoKpo", "maqtyr", "holis"];

for (let i = 0; i < 5; i++) {
  clave = prompt("decime tu clave");
  if (listaClaves[i] == clave) {
    alert("bienvenido");
  } else {
    while (clave != correcto) clave = prompt("ey, tu clave");
  }
}

//let clave;
let correcto = true;
let listaClaves = ["Perro", "miau1234", "PepoKpo", "maqtyr", "holis"];

let clave = prompt("Decime tu clave");

for (let i = 0; i < 5; i++) {
  let opcion = listaClaves[i];
  while (clave) {
    clave = prompt("decime tu clavE MALDITA SEAH");
    if (clave == correcto) {
      alert("Bienvenido");
    }
  }
}

let correcto = true;
let listaClaves = ["Perro", "miau1234", "PepoKpo", "maqtyr", "holis"];
let clave = prompt("Decime tu clave");

if (clave == correcto) {
  alert("Bienvenido");
} else {
  clave = prompt("Decime tu clave");
}

let ejecutar = true;

do {
  let pass = prompt();
  for (let i = 0; i < 5; i++) {
    if (pass == listaClaves[i]) {
      //en vez de imprimir, comparar con la clave.
      alert("Bienvenido");
      ejecutar = false;
    }
  }
} while (ejecutar);

/**********************************************
 *
 * 1. Hacer un array que se llame "nombres".
 * 2. pedirle al usuario que ingrese 5 nombres.
 * 3.Imprimirlos en el orden ingresado.
 * 4. Imprimirlos en el orden inverso.
 * */
for (let i = 0; i <= 5; i++) {
  ingresoNombres;
  nombres = ingresoNombres;
  console.log(nombres[i]);
}

do {
  let ingresoNombres = prompt("Escribí un nombre");

  for (let i = 0; i <= 5; i++) {
    nombres = ingresoNombres;
    console.log(nombres[i]);
  }
} while ((ejecutar = false));

let nombres = [];

for (let i = 0; i < 5; i++) {
  nombres[i] = prompt("Escribí un nombre"); // Si lo definia y ponia afuera, me preguntaba una sola vez. Pero si hago esto, como esta en loop, me lo pregunta 5 veces. O sea, la i, a medida que itera el for, va sumando y preguntandome un nombre. De la otra manera era un solo nombre, pero ocupaba 5 espacios.
}
//alert("Estos fueron tus nombres: "+nombres);
console.log(nombres);

//alert("Y a la inversa son: " +nombres.reverse());
console.log(nombres.reverse());

for (let i = 4; i > -1; i--) {
  console.log(nombres[i]);
}
//alert("Estos fueron tus nombres: "+nombres);

//VERSION CON DOS FOR.
let nombres = [];

for (let i = 0; i < 5; i++) {
  console.log((nombres[i] = prompt("Escribí un nombre"))); // Si lo definia y ponia afuera, me preguntaba una sola vez. Pero si hago esto, como esta en loop, me lo pregunta 5 veces. O sea, la i, a medida que itera el for, va sumando y preguntandome un nombre. De la otra manera era un solo nombre, pero ocupaba 5 espacios.
}
for (let i = 4; i >= 0; i--) {
  console.log(nombres[i]);
}
//alert("Estos fueron tus nombres: "+nombres);

//SCOPE

var pepe = 1;
for (var i = 0; i < 10; i++) {
  //hago algo
  pepe = 2;
}

if (condicion) {
  var t = 2;
  let q = 3;
}
//scope
console.log(pepe); //2
console.log(i); //undefined
console.log(t); //2
console.log(q); //undefined
/* tipo var, en funciones es su scope algo asi. let: campo de scope más chico let: campo accion adentro de las llaves. */

const PEPE = "pepe";
const TEST = 1;
let variable = "valor 1";
switch (variable) {
  case "valor 1":
    //accion
    break;
  case "valor 2":
    //accion2
    break;
  default:
  //tercera accion posible
}
//ternario
let variable = "primer valor";
let variable = 2 == 1 ? 1 : 2;

let variable = 1;
switch (variable) {
  case 1:
    //accion
    break;
  case 2:
    //accion2
    break;
  case 3:
    //accion3
    break;
  default:
  //tercera accion posible
}

/********************************************************************************************************************
 *
 * 1. Pedir un mes del año por prompt en numeros (por ej. 12).
 * 2. Devolver el mes del año en texto (ej. "Diciembre").
 * 3. Hacer 2 veces, una con SWITCH y otra con IF-ELSE IF-ELSE,
 *
 *********************************************************************************************************************/

let mes = prompt("Decime un mes (en numeros)");
mes = parseInt(mes);

switch (mes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  case 7:
    console.log("Julio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Septiembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Noviembre");
    break;
  case 12:
    console.log("Diciembre");
    break;
  default:
    mes = prompt("TIRAME un numero");
}

let mes = prompt("Decime un mes (en numeros)");
mes = parseInt(mes);
if (mes == 1) {
  console.log("Enero");
} else if (mes == 2) {
  console.log("Febrero");
} else if (mes == 3) {
  console.log("Marzo");
} else if (mes == 4) {
  console.log("Abril");
} else if (mes == 5) {
  console.log("Mayo");
} else if (mes == 6) {
  console.log("Junio");
} else if (mes == 7) {
  console.log("Julio");
} else if (mes == 8) {
  console.log("Agosto");
} else if (mes == 9) {
  console.log("Septiembre");
} else if (mes == 10) {
  console.log("Octubre");
} else if (mes == 11) {
  console.log("Noviembre");
} else if (mes == 12) {
  console.log("Diciembre");
} else {
  mes = prompt("tirame un numero");
}

/***********************************************************************************************************************
 *
 * 1. Pedir un día de la semana por prompt en texto (ej. "Lunes")
 * 2. Devolver el numero del día (ej:2).
 * 3. En caso de que el día ingresado no exista, tirar un error, agarrarlo e imprimirlo
 *
 */

try {
  let dia = prompt("Decime un día");
  dia = dia.toString();
  dia = dia.toLowerCase();

  switch (dia) {
    case "lunes":
      console.log(1);
      break;
    case "martes":
      console.log(2);
      break;
    case "miércoles":
    case "miercoles":
      console.log(3);
      break;
    case "jueves":
      console.log(4);
      break;
    case "viernes":
      console.log(5);
      break;
    case "sábado":
    case "sabado":
      console.log(6);
      break;
    case "domingo":
      console.log(7);
      break;
    default:
      throw "eso no existe";
  }
} catch (err) {
  console.warn(err);
  //throw "error en switch dias"
} finally {
  //siempre ejecuta el bloque de código dentro del finally, haya error o no.
  console.log("proceso terminado en x segundos");
}

console.log("Siguiente ejercicio");

//FUNCTIONS

let a = 1;

const miFuncion = () => {
  //arrow functions, las que se usan más ahora.
  a += 2;
};

function myFunction() {
  // nombre. se puede lla
  a *= 3;
}

let dividir = function() {
  //anonima
  a /= 2;
};

//1.
/***********************************************
 *
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion me
 *    pide un nombre
 * 3. Toma ese nombre y me dice
 *    "Hola <nombre>" en un alert.
 *
 ***********************************************/

const saludo = () => {
  let unNombre = prompt("Decime un nombre");
  alert(`Hola ${unNombre}`);
};

//2.
/***********************************************
 *
 * Hacer una funcion para elevar un
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert.
 *
 ***********************************************/

const cuadrado = () => {
  let numero = prompt("decime un numero");
  numero = Math.pow(numero, 2);
  console.log(`este es el número al cuadrado:${numero}`);
};

//3.
/***********************************************
 *
 * 1. Crear un array vacío
 * 2. Hacer una funcion para llenar
 *    el array, pidiendo por prompt.
 * 3. Hacer una función que muestre en un alert
 *    el último valor agregado al array.
 * 4. Hacer una función para imprimir la lista
 *    de valores del array en un console.log.
 * o
 ************************************************/

let listaNombres = [];

const llenarLista = () => {
  let nombre = prompt("Escribí un nombre");
  listaNombres.push(nombre);
  //listaNombres.push(prompt("decime algo"));
};

llenarLista();
llenarLista();
llenarLista();
llenarLista();
llenarLista();
llenarLista();

const ultimoNombre = () => {
  nombre = listaNombres[listaNombres.length - 1];
  alert(`El último nombre de la lista es: ${nombre}`);
};
ultimoNombre();

const imprimirLista = () => {
  console.log(listaNombres);
};
imprimirLista();

// 1
/***********************************************
 *
 * Escribir una función que reciba como parámetro
 * un número e imprima ese número al revés.
 * Pista: Buscar como transformar los strings en arrays.
 *
 ***********************************************/

const alReves = numero => {
  //nombres de las funciones por lo general en inglés.
  numero = numero.toString();
  let nuevoNumero = numero.split("");
  let otroNumero = nuevoNumero.reverse().join("");
  console.log(otroNumero);
};
alReves(12345); //Acá tiene en cuenta a las comas tambien.f the separator is an empty string (“”) then every character of the string is separated //2
/***********************************************
 *
 * Escribir una función que reciba una palabra
 * e imprima sus letras ordenadas alfabéticamente.
 *
 ***********************************************/
/* Otra forma de escribirlo:
const reverseNumber= (numberToReverse)=>{
  numberToReverse=numberToReverse.toString()
                                 .split("")
                                 .reverse() 
                                 .join("");//.toString();
  console.log(numberToReverse);
}
.split(",")["a","b","c"]
.split("") ["a",",","b",",","c"]*/ const palabraAlreves = palabrita => {
  palabrita = palabrita.toLowerCase();
  let nuevaPalabra = palabrita.split("");
  let otraPalabra = nuevaPalabra.sort().join("");
  return otraPalabra;
};
palabraAlreves("HoLa"); //la mayuscula viene primero. Asi que si pongo eso, siempre la va a poner primero.

/* Otra forma de escribirlo:
const palabraAlreves = (palabrita) =>{
  palabrita=palabrita.toLowerCase();
                    .split("");
                    .sort()
                    .join("");
 return palabrita;
};
 
 */

// 3
/***********************************************
 *
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de
 * cada palabra en mayúsculas.
 *
 ***********************************************/

const capitalize = phrase => {
  phrase = phrase.split(" "); //si no lo separo por espacios, me separa cada caracter, y lo toma como "primer elemento"y lo pone en Mayus.
  for (i = 0; i < phrase.length; i++) {
    phrase[i] = phrase[i].charAt(0).toUpperCase() + phrase[i].slice(1);
  }
  return phrase.join(" ");
};
capitalize("hola mi nombre es vicky");

/**
 * l
 *
 */

//4
/***********************************************
 *
 * Escribir una función que reciba una frase
 * e imprima la palabra mas larga de la misma
 *
 ***********************************************/

const findLongestWord = frase => {
  fraseSplit = frase.split(" ");
  let longestWord = 0;
  let word = "";
  for (i = 0; i < fraseSplit.length; i++) {
    if (fraseSplit[i].length > longestWord) {
      longestWord = fraseSplit[i].length;
      word = fraseSplit[i];
    }
  }
  return word;
};
findLongestWord("The quick brown fox jumped over the lazy dog");

// 1
/***********************************************
 *
 * Hacer una función que reciba una frase y devuelva
 * el número de vocales que tiene la misma.
 *
 ***********************************************/

const vowels = "aeiouAEIOU";

const findVowels = frase => {
  let vowelCount = 0;

  for (i = 0; i < frase.length; i++) {
    if (vowels.indexOf(frase[i]) !== -1) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

findVowels("HolA como estAs");
/* 
const isVowel = c => { return vowels.indexOf(c) !== -1};

const findVowels2 = str => {
  return str
    .toLowerCase()
    .split('')
    .filter(isVowel)
    .length
}


findVowels2("HolA como estAs"); */

// 2
/***********************************************
 *
 * Hacer una función que tome, primero, una frase
 * y luego pida un caracter para remover de la
 * frase ingresada.
 * Observaciones: validar que el caracter ingresado
 * sea solo uno. Si es más de uno tirar un error.
 *
 ***********************************************/

const replaceChar = frase => {
  let char = prompt("Decime un caracter: ");
  if (frase.includes(char)) {
    frase.replace(char, "");
  }
};

const replaceChar = frase => {
  let char = prompt("Decime un caracter: ");
  if (char.length > 1) {
    throw "se ingresó mas de un caracter";
  }

  frase = frase.replace(char, "");

  return frase;
};
replaceChar("hola como estas");

const replaceChar = frase => {
  let char = prompt("Decime un caracter: ");
  if (char.length > 1) {
    throw "se ingresó mas de un caracter";
  }
  for (i = 0; i < frase.length; i++) {
    if (char.indexOf(frase[i]) !== -1) {
      //letra=char.indexOf(frase);
      newfrase = frase.replace(char, "");
      frase = newfrase.replace(char, "");
    }
  }
  return frase;
};
replaceChar("aaaa");

