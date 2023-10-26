 //Archivo: js/validacion.js
 document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function (event) {
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar que los campos no estén vacíos
        if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
            alert('Por favor, complete todos los campos del formulario.');
        } else {
            // Aquí podrías agregar lógica adicional o enviar el formulario
            alert('Formulario enviado correctamente.');
             formulario.submit();  // Descomenta esta línea para enviar el formulario realmente
        }
    });
});

