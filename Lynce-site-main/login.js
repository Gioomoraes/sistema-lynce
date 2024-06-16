document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');
    const backButton = document.querySelector('.back-button');

    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        const iconSrc = type === 'password' ? 'imgs/olhofechado.png' : 'imgs/olhoaberto.png';
        passwordIcon.setAttribute('src', iconSrc);
    });

    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        history.back();
    });
});
