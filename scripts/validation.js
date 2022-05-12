const formSignUp = document.getElementById('sign-up');
const buttonSignUp = document.getElementById('btsignup');
const emailSignUp = document.getElementById('sign-up-email');
const usernameSignUp = document.getElementById('sign-up-username');
const passwordSignUp = document.getElementById('sign-up-password');
const repasswordSignUp = document.getElementById('sign-up-repassword');

const fieldsSignUp = document.getElementsByClassName('field-sign-up');
const errorsSignUp = document.getElementsByClassName('sign-up-error');

formSignUp.addEventListener('submit', function (e) {
    e.preventDefault();

    removeErrors();

    checkFieldsBlank();
    checkPasswordMatch();
});

function getErrorBlock(msg) {
    let error = document.createElement('div');
    error.className = 'error-sign-up';
    error.style.color = 'red';
    error.innerHTML = msg;

    return error;
}

function removeErrors() {
    let errors = formSignUp.getElementsByClassName('error-sign-up');
    
    for (let i = errors.length-1; i >= 0; i--) {
        errors[i].remove();
        console.log(errors);
    }
}

function checkFieldsBlank() {
    for (let i = 0; i < fieldsSignUp.length; i++) {        
        if (!fieldsSignUp[i].value) {
            let error = getErrorBlock("Cannot be blank");
            formSignUp[i].parentElement.insertBefore(error, fieldsSignUp[i])
        }
    }
}

function checkPasswordMatch() {
    if (passwordSignUp.value !== repasswordSignUp.value) {
        let error = getErrorBlock("Password doesn't match");
        passwordSignUp.parentElement.insertBefore(error, passwordSignUp)
    }
}