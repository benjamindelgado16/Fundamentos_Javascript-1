
function manipularNombre() {
    // uso de string ejemplo
    let nombre = prompt("Ingrese su nombre: "); // varianble tipo texto
    //uso de length --> largo de una variable 
    let primeraLetra = nombre[0];
    //asignamos un valor a primeraLetra con posicion 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera letra es: " + primeraLetra +
        "\nUltima letra es: " + ultimaLetra
    );//mostrar resultado 
}

// Tarea: imprimir segunda letra y penultima en el apellido

function manipularApellido() {
    let apellido = prompt("Ingrese su apellido: "); // varianble tipo texto
    //uso de length --> largo de una variable 
    let segundaLetraApellido = apellido[1];
    //asignamos un valor a primeraLetra con posicion 0 de nombre
    let penultimaLetraApellido = apellido[apellido.length - 2];
    //mostrar resultado
    alert("Segunda letra es: " + segundaLetraApellido +
        "\nPenultima letra es: " + penultimaLetraApellido
    );
    // no se puede modificar porque es inmutable
    apellido[1] = "J"; //no funciona 
    alert("segunda letra del apellido es: " + segundaLetraApellido +
        "\nPenultima letra del apellido es: " + penultimaLetraapellido
    );
}