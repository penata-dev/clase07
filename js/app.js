const usuario = document.getElementById ("usuario");
const ayuyda = document.getElementById ("ayuda");
const entrada = document.getElementById ("entrada");
const salida = document.getElementById ("salida");
const busqueda = document.getElementById ("busqueda");
const formulario = document.getElementById ("formulario");
const nombre = document.getElementById ("nombre")
const mensaje = document.getElementById ("mensaje");
const porcentaje = document.getElementById ("porcentaje");
const respuesta = document.getElementById ("respuesta");

const contraseña = document.getElementById ("contraseña");
const requisitos = document.getElementById ("requisitos");

contraseña.addEventListener ("focus", function () {
    requisitos.textContent = 
    "Use minimo 8 caracteres.";
});

contraseña.addEventListener ("input", function() {

    let valor = contraseña.value.length;
    if (valor < 8 || valor > 12) {
        requisitos.textContent = " Valor fuera de rango."
    } else {
        requisitos.textContent = "Valor valido"
    }
});

contraseña.addEventListener ("blur", function () {
    let cantidad = contraseña.value.length;

    if (cantidad < 8) {
        requisitos.textContent = "No cumple con los caracteres.";
    } else {
        requisitos.textContent = "Caracteres válidos.";
    }
});


usuario.addEventListener ("focus", function () {
    ayuda.textContent = 
    "Use entre 5 y 12 caracteres.";
});

busqueda.addEventListener ("keydown", function (event) { 

    if (event.key === "Enter") {
        salida.textContent = "Buscando: " + busqueda.value;
    }

})

entrada.addEventListener ("keydown", function (event) {
    console.log = (event.key);
});

usuario.addEventListener ("blur", function () {
    let cantidad = usuario.value.length;

    if (cantidad < 5) {
        ayuda.textContent = "Nombre demasiado corto.";
    } else {
        ayuda.textContent = "Nombre válido.";
    }
});

formulario.addEventListener ("submit", function (event) {
    event.preventDefault();
    console.log ("Formulario enviado.");

    let codigo = nombre.value;

    if (codigo.length >= 4) {
        mensaje.textContent = "Codigo aceptado";
    } else {
        mensaje.textContent = "El codigo debe tener minimo 4 caracteres"
    }
});

porcentaje.addEventListener ("input", function() {

    let valor = Number(porcentaje.value);
    if (valor < 0 || valor > 100) {
        respuesta.textContent = " Valor fuera de rango."
    } else {
        respuesta.textContent = "Valor valido"
    }
});

nombre.addEventListener ("blur", function (){

    if (nombre.value === "") {
        mensaje.textContent = "Este campo es obligatorio";
    } else {
        mensaje.textContent = "Campo diligenciado";
    }
})