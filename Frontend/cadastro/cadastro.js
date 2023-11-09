const botao = document.getElementById('botao');
botao.addEventListener('click', function (event) {
    event.preventDefault();
    if (this.dataset.succes) {
        window.location.href = '../login/login.html';
    } else {
        alert('Nao deu')
    }
});