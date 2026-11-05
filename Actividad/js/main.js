const nombre = document.getElementById ("nombre");
const salidaNombre = document.getElementById ("salidaNombre");

const formulario = document.getElementById ("formulario");
const resultado = document.getElementById ("resultado");

const edad = document.getElementById ("edad");
const salidaEdad = document.getElementById ("salidaEdad");

const modalidad = document.getElementById ("modalidad");
const infoModalidad = document.getElementById ("infoModalidad");

const experiencia = document.getElementById ("experiencia");
const infoExperiencia = document.getElementById ("infoExperiencia");


const correo = document.getElementById ("correo");
const salidaCorreo = document.getElementById ("salidaCorreo");

const enviado = document.getElementById ("enviar")

nombre.addEventListener("focus", function() {
    salidaNombre.textContent = "Ingrese su nombre."
});
nombre.addEventListener("input", function () {
    salidaNombre.textContent = "Participante: " + nombre.value + " y la cantidad de caracteres son: " + nombre.value.length;
});
nombre.addEventListener ("blur", function (){

    if (nombre.value === "") {
        salidaNombre.textContent = "Este campo es obligatorio";
    } else {
        salidaNombree.textContent = "Campo diligenciado";
    }
})

edad.addEventListener("focus", function() {
    salidaEdad.textContent = "Ingrese su edad en un rango de 0 a 100."
});
edad.addEventListener("input", function() {
    let años = Number(edad.value);

    if (años < 0 || años > 100) {
        salidaEdad.textContent = "Edad invalida."
    } else {
        salidaEdad.textContent = "Edad valida."
    }
});

modalidad.addEventListener("change", function() {

    let opcion = modalidad.value;

    if (opcion === "mañana") {
        infoModalidad.textContent = "La modalidad seleccionada fue: " + opcion;
    } else if (opcion === "tarde") {
        infoModalidad.textContent = "La modalidad seleccionada fue: " + opcion;
    } else {
        infoModalidad.textContent = "La modalidad seleccionada fue: " + opcion;
    }
});

correo.addEventListener("focus", function() {
    salidaCorreo.textContent = "Ingrese su correo debe tener un (@) y su dominio";
});

experiencia.addEventListener("change", function() {

    let opcion2 = experiencia.value;

    if (opcion2 === "principiante") {
        infoExperiencia.textContent = "La experiencia seleccionada fue: " + opcion2 + ", sigue para subir de experiencia";
    } else if (opcion2 === "intermedio") {
        infoExperiencia.textContent = "La experiencia seleccionada fue: " + opcion2 + ", sigue para subir de experiencia, vas bien";
    } else {
        infoExperiencia.textContent = "La experiencia seleccionada fue: " + opcion2 + ", super bien, calmate";
    }
});

formulario.addEventListener ("submit", function(event) {

    if (nombre.value === "" || correo.value === "" || edad.value === "" || modalidad.value === "") {
        event.preventDefault();
        resultado.textContent = "Falta un campo por rellenar"
    } else {
        resultado.textContent = "Formulario enviado correctamente."
    }
})


