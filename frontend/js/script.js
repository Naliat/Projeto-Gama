// Coloque este código dentro de frontend/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    // Função para mostrar a tela de Cadastro
    const showRegister = (e) => {
        e.preventDefault();
        loginBox.classList.remove('active');
        registerBox.classList.add('active');
    };

    // Função para mostrar a tela de Login
    const showLogin = (e) => {
        e.preventDefault();
        registerBox.classList.remove('active');
        loginBox.classList.add('active');
    };

    // Adiciona os event listeners aos links
    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', showRegister);
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', showLogin);
    }
});