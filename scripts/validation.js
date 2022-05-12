const formSignUp = document.getElementById('sign-up');
const fieldsSignUp = document.getElementsByClassName('field-sign-up');

const formSignIn = document.getElementById('sign-in');
const fieldsSignIn = document.getElementsByClassName('field-sign-in');

formSignUp.addEventListener('submit', function (e) {
    e.preventDefault();

    removeErrors(formSignUp, 'error-sign-up');
    checkFieldsBlank(formSignUp, fieldsSignUp, 'error-sign-up');
    checkPasswordMatch(passwordSignUp, repasswordSignUp, 'error-sign-up');
});

formSignIn.addEventListener('submit', function (e) {
    e.preventDefault();

    removeErrors(formSignIn, 'error-sign-in');
    checkFieldsBlank(formSignIn, fieldsSignIn, 'error-sign-in');
});



function getErrorBlock(msg, className) {
    let error = document.createElement('div');
    error.className = className;
    error.style.color = 'red';
    error.textContent = msg;

    return error;
}
function removeErrors(form, errorClassName) {
    let errors = form.getElementsByClassName(errorClassName);
    
    for (let i = errors.length-1; i >= 0; i--) {
        errors[i].remove();
        console.log(errors);
    }
}
function checkFieldsBlank(form, fields, errorClassName) {
    for (let i = 0; i < fields.length; i++) {        
        if (!fields[i].value) {
            let error = getErrorBlock("Cannot be blank", errorClassName);
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
}
function checkPasswordMatch(password, repassword, errorClassName) {
    if (password.value !== repassword.value) {
        let error = getErrorBlock("Password doesn't match", errorClassName);
        password.parentElement.insertBefore(error, password)
    }
}