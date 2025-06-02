// Declaración de variables
let anioNacimiento = 2008;
let numeroNegativo = -20;
let ubicacionActual = "Santiago de chile";
let valorBooleano = true;
let fechaHoy = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
    alert("año de nacimiento: " + anioNacimiento);
}

function mostrarNumeroNegativo() {
    alert("Número negativo: " + numeroNegativo);
}

function mostrarUbicacionActual() {
    alert("ubicacion: " + ubicacionActual);
}

function mostrarBooleano() {
    alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
    alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
    alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
    alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
    alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
    alert("Constante mes: " + mes);
}
