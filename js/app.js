// JavaScript for the Login and SignUp Form
var x = document.getElementById('login-form'),
    y = document.getElementById('signup-form'),
    z = document.getElementById('btn-toggler');

function login() {
    x.style.left = "1rem";
    y.style.left = "-50rem";
    z.style.left = "11rem";
};

function signup() {
    x.style.left = "50rem";
    y.style.left = "0";
    z.style.left = "0";
};

// const togglePassword = document.querySelector('#password-viewer');
// const password = document.querySelector('#inputPassword');

// togglePassword.addEventListener('click', function (e) {
//     const type = password.getAttribute('type') === 'password' ? 'text' : password.setAttribute('type', type);
//     this.classList.toggle('fa-eye-slash');
// });

function passwordToggle() {
    var p = document.getElementById("inputPassword"),
        P = document.getElementById('inputNewPassword');

    if (p.type === "password") {
        p.type = "text";
    } else {
        p.type = "password";
    };

    if (P.type === 'password') {
        P.type = 'text';
    } else {
        P.type = 'password';
    };

    var icon = document.getElementById('eyeIcon'),
        iconSign = document.getElementById('eyeToggler'),
        iconAccount = document.getElementById('pswIcon');

    icon.classList.toggle('fa-eye-slash');
    iconSign.classList.toggle('fa-eye-slash');
    iconAccount.classList.toggle('fa-eye-slash')
};