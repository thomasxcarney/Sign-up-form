const passwordInput = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
var passwordInputValue = passwordInput.value;
var passwordConfirmValue = passwordConfirm.value;

console.log(passwordConfirmValue)

function removeError() {
    passwordInputValue = passwordInput.value;
    passwordConfirmValue = passwordConfirm.value;
    if(passwordInputValue === passwordConfirmValue) {
        passwordInput.classList.remove('error');
        passwordConfirm.classList.remove('error');
    };
};

passwordConfirm.addEventListener('input', removeError);