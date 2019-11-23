let nombre = prompt("Cuál es tu nombre?");
let edad = prompt("Cuántos años tenes?");
let nacimiento = prompt("Cuando es tu cumpleaños?");
let signo = prompt("Cual es tu signo?");

let respuesta = alert(
  "Tu nombre es " +
    nombre +
    " y tenes " +
    edad +
    " años. Nacíste el " +
    nacimiento +
    " y tu signo zodiacal es " +
    signo
);

//Siguiente ejercicio.

let anioNacimiento = prompt("En qué año naciste?");
anioNacimiento = parseInt(anioNacimiento);
let anioActual = 2019;
let edadPosible = anioActual - anioNacimiento;
let edadAlternativa = edadPosible - 1;

let respuestaEdad = alert(
  "Si ya cumpliste años tenés " +
    edadPosible +
    " y si no, tenes " +
    edadAlternativa
);

// tercer ejercicio.

let radio = prompt("Cual es el radio de la circunferencia?");

radio = parseFloat(radio);
let diametro = radio * 2;
let area = 3.14159265359 * radio * radio;

area = parseFloat(area);

let respuesta = alert(
  "el diametro del circulo es " + diametro + " y el área es " + area
);

//cuarto ejercicio

let color = prompt("¿Cuál es tu color favorito?");
let lapiz = "celeste";

if (lapiz == color) {
  alert("Me encanta ese color");
} else if (lapiz == "violeta") {
  alert("esta bien");
} else {
  alert("No lo uso");
}

//corto  rapar medio cortar largo cortar puntas sin pelo no se.

//11/10

let largoPelo = prompt("cuán largo es tu pelo?");
largoPelo = largoPelo.toLowerCase();
let barba = confirm("tenes barba?");

if (largoPelo == "corto" && barba) {
  alert("hay que rapar ese pelito  y afeitar esa barba.");
} else if (largoPelo == "medio" && barba) {
  alert("entonces cortamos las puntitas y afeitamos la barba.");
} else if (largoPelo == "largo" && barba) {
  alert("Bueno, hay que cortarlo y afeitar esa barba.");
} else if (largoPelo == "corto") {
  alert("hay que rapar ese pelito.");
} else if (barba) {
  alert("Pero QUÉ BELLA barba");
} else if (largoPelo == "medio") {
  alert(" entonces cortamos las puntitas");
} else if (largoPelo == "largo") {
  alert("Bueno, hay que cortarlo");
} else {
  alert("No te entiendo ¿Que onda tu pelo? ¿Tu barba?");
}

// otra opcion más práctica y directa.
if ((largoPelo == "largo" || largoPelo == "medio") && barba) {
  alert("Bueno, hay que cortarlo y afeitar esa barba.");
} else if (barba) {
  alert("barba");
} else if (largoPelo == "corto") {
  alert("hay que rapar ese pelito.");
} else if (largoPelo == "medio") {
  alert(" entonces cortamos las puntitas");
} else if (largoPelo == "largo") {
  alert("Bueno, hay que cortarlo");
} else {
  alert("No te entiendo ¿Que onda tu pelo? ¿Tu barba?");
}

