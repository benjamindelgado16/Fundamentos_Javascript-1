// Declaración de variables
let anioNacimiento = 2008; // tipo numerico INT
let Edad = 20; // numerico con partes decimales FLOAT
let malChiste = "fantasma";
let valorPregunta = true; //Valor verdadero o falso(0, 1)
let arreglito = [1, 2, 3, ["arreglo"]]; //Array - lista de elementos
let objetoUsuario = { nombre: "Alejenadro", edad: 18, correo: "alejandroandres@gmail.com" }; // Objet diccionario
let valorCrearcuenta; // valor sin valor asignado - indefined
let valorGeneronulo = null; // valor null - Null
const año = "2016"; // constante - no varia



// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {

    alert("año de nacimiento: " + anioNacimiento);
}

function mostrarEdad() {
    alert("Edad: " + mostrarEdad);
}

function mostrarMalchiste() {
    alert("una sandia " + malChiste);
}

function mostrarPregunta() {
    alert("valo respuesta: " + valorPregunta);
}

function mostrarArreglito() {
    alert("Arreglo de números: " + arreglito);
}

function mostrarObjetoUsuario() {
    alert("Objeto usuario: " + JSON.stringify(objetoUsuario));
}

function mostrarCrearcuenta() {
    alert("Valor cuenta nueva: " + valorCrearcuenta);
}

function mostrarGeneronulo() {
    alert("genero: " + valorGeneronulo);
}

function mostrarAñoconstante() {
    alert("Año constante: " + año);
}
