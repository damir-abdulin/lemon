const formSignUp = document.getElementById('sign-up');
const fieldsSignUp = document.getElementsByClassName('field-sign-up');

const passwordSignUp = document.getElementById('sign-up-password');
const repasswordSignUp = document.getElementById('sign-up-repassword');
const emailSignUp = document.getElementById('sign-up-email');

const formSignIn = document.getElementById('sign-in');
const fieldsSignIn = document.getElementsByClassName('field-sign-in');

formSignUp.addEventListener('submit', function (e) {
    e.preventDefault();
    
    removeErrors(formSignUp, 'error-sign-up');
    checkFieldsBlank(formSignUp, fieldsSignUp, 'error-sign-up');
    checkPasswordMatch(passwordSignUp, repasswordSignUp, 'error-sign-up');
    checkEmail(emailSignUp, 'error-sign-up');

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
    }
}
function checkFieldsBlank(form, fields, errorClassName) {
    let result = true;

    for (let i = 0; i < fields.length; i++) {        
        if (!fields[i].value) {
            let error = getErrorBlock("Cannot be blank", errorClassName);
            form[i].parentElement.insertBefore(error, fields[i].nextSibling)
            result = false;
        }
    }

    return result;
}
function checkPasswordMatch(password, repassword, errorClassName) {
    let result = true;

    if (password.value != repassword.value) {
        let errorPassword = getErrorBlock("Password doesn't match", errorClassName);
        let errorRepassword = getErrorBlock("Password doesn't match", errorClassName);

        password.parentElement.insertBefore(errorPassword, password.nextSibling);       
        repassword.parentElement.insertBefore(errorRepassword, repassword.nextSibling);
        result = false;
    }

    return result;
}
function checkEmail(email, errorClassName) {
    let result = true;
    if (email.validity.typeMismatch) {
        let error = getErrorBlock("Invalid email", errorClassName);
        email.parentElement.insertBefore(error, email.nextSibling)
        result = false;
    }

    return result;
}