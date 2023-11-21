function toggleDevs() {
    var devsList = document.getElementById('devs-list');
    devsList.style.display = (devsList.style.display === 'none' || devsList.style.display === '') ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Formulário enviado com sucesso!');
            // Aqui você pode adicionar código para processar o formulário, como enviar por e-mail ou salvar em um banco de dados.
            // Por enquanto, apenas exibimos um alerta como exemplo.
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return false;
        }

        return true;
    }
});
