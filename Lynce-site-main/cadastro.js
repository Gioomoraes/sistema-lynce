document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('cadastroForm');
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmar-senha');
    const senhaErro = document.getElementById('senhaErro');
    const togglePassword = document.getElementById('togglePassword');

    form.addEventListener('submit', function (event) {
        if (senha.value !== confirmarSenha.value) {
            event.preventDefault();
            senha.classList.add('erro');
            confirmarSenha.classList.add('erro');
            senhaErro.style.display = 'block';
        } else {
            senha.classList.remove('erro');
            confirmarSenha.classList.remove('erro');
            senhaErro.style.display = 'none';
        }
    });

    togglePassword.addEventListener('click', function () {
        const senhaType = senha.type === 'password' ? 'text' : 'password';
        senha.type = senhaType;
        confirmarSenha.type = senhaType;
        togglePassword.src = senhaType === 'password' ? 'img (cadastrologin)/olhofechado.png' : 'img (cadastrologin)/olhoaberto.png';
    });
});


