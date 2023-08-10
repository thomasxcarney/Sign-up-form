const passwordInput = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
var passwordInputValue = passwordInput.value;
var passwordConfirmValue = passwordConfirm.value;
const errorMessage = document.getElementsByClassName('password-error-message')[0];

function removeError() {
    passwordInputValue = passwordInput.value;
    passwordConfirmValue = passwordConfirm.value;
    if(passwordInputValue === passwordConfirmValue) {
        passwordInput.classList.remove('error');
        passwordConfirm.classList.remove('error');
        errorMessage.innerHTML = "";
    };
};

passwordConfirm.addEventListener('input', removeError);