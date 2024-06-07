document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Formulario enviado exitosamente');
        // Aquí puedes añadir código para enviar el formulario, como una petición AJAX.
    } else {
        alert('Por favor, completa todos los campos');
    }
});
