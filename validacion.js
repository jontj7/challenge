// Esta función maneja la validación del formulario
function validarFormulario(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    var contacto=document.getElementById('contacto').value.trim();


    if (nombre === '' || correo === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Aquí podrías enviar los datos del formulario a través de AJAX o realizar otras acciones necesarias
    alert('¡Formulario enviado con éxito!');
}

// Esta función maneja el clic en el botón "Enviar mensaje"
function manejarEnvioMensaje() {
    // Aquí puedes agregar tu lógica para enviar el mensaje
    console.log("Mensaje enviado");
}

document.addEventListener("DOMContentLoaded", function() {
    // Asignar la función validarFormulario al evento 'submit' del formulario
    const form = document.getElementById('formulario-contacto');
    form.addEventListener('submit', validarFormulario);

    // Asignar la función manejarEnvioMensaje al evento 'click' del botón
    const botonEnviarMensaje = document.querySelector(".contact__form-button");
    botonEnviarMensaje.addEventListener("click", manejarEnvioMensaje);
});