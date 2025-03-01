/* - ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando? */


function promptUser(idElemento) {
    let elemento = document.getElementById(idElemento).value;

    if (idElemento === "usuarioNombre") {
        if (elemento === "") {
            alert("Por favor, ingresa tu nombre");
        } else {
            console.log(elemento);
        }
    } else if (idElemento === "usuarioEdad") {
        if (elemento > 0) {
            console.log(elemento);
        } else {
            alert("Digite un número válido");
        }
    } else if (idElemento === "usuarioPrograma") {
        if (elemento === "") {
            alert("Por favor, ingresa un lenguaje de programación");
        } else {
            console.log(elemento);
        }
    } else {
        alert("Error");
    }
}

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function enviarInfo () {
    let nombre = document.getElementById("usuarioNombre").value;
    let edad = document.getElementById("usuarioEdad").value;
    let lenguajeProgramacion = document.getElementById("usuarioPrograma").value;

    promptUser("usuarioNombre");
    promptUser("usuarioEdad");
    promptUser("usuarioPrograma");
    asignarTextoElemento ("h4", `¡Hola ${nombre}! tienes ${edad} años y estás aprendiendo ${lenguajeProgramacion}`);
    mostrarImagen(); 
    limpiarCajas(); 
}

function mostrarImagen () {
    let imagenPremio = document.getElementById("ImagenUsuario")
    imagenPremio.setAttribute('aria-disabled', 'false');

}

function limpiarCajas () {
    document.querySelector("#usuarioNombre").value = "";
    document.querySelector("#usuarioEdad").value = "";
    document.querySelector("#usuarioPrograma").value = "";
}