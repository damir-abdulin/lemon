const formSignUp = document.getElementById('sign-up');
const fieldsSignUp = document.getElementsByClassName('field-sign-up');

const passwordSignUp = document.getElementById('sign-up-password');
const repasswordSignUp = document.getElementById('sign-up-repassword');
const emailSignUp = document.getElementById('sign-up-email');
const usernameSignUp = document.getElementById('sign-up-username');

const formSignIn = document.getElementById('sign-in');
const fieldsSignIn = document.getElementsByClassName('field-sign-in');

const usernameSignIn = document.getElementById('sign-in-username');
const passwordSignIn = document.getElementById('sign-in-password');

emailSignUp.addEventListener('input', function(e) {
    checkEmailSignUp();
});
usernameSignUp.addEventListener('input', function(e) {
    checkSimpleField(formSignUp, usernameSignUp, 'error-username-sign-up');
});
passwordSignUp.addEventListener('input', function(e) {
    checkSimpleField(formSignUp, passwordSignUp, 'error-password-sign-up');
    checkRepasswordSignUp();
});
repasswordSignUp.addEventListener('input', function(e) {
    checkRepasswordSignUp();
});
formSignUp.addEventListener('submit', function (e) {
    // let result = checkEmailSignUp() && checkSimpleField(usernameSignUp, 'error-username-sign-up') 
    // checkSimpleField(passwordSignUp, 'error-password-sign-up') && checkRepasswordSignUp();

    let email = checkEmailSignUp();
    let username = checkSimpleField(formSignUp, usernameSignUp, 'error-username-sign-up');
    let password = checkSimpleField(formSignUp, passwordSignUp, 'error-password-sign-up');
    let repassword = checkRepasswordSignUp();

    if (!(email && username && password && repassword)) {
        e.preventDefault();
    }
});
usernameSignIn.addEventListener('input', function(e) {
    checkSimpleField(formSignIn, usernameSignIn, 'error-username-sign-in');
});
passwordSignIn.addEventListener('input', function(e) {
    checkSimpleField(formSignIn, passwordSignIn, 'error-password-sign-in');
});
formSignIn.addEventListener('submit', function (e) {
    
    let login = checkSimpleField(formSignIn, usernameSignIn, 'error-username-sign-in');
    let password = checkSimpleField(formSignIn, passwordSignIn, 'error-password-sign-in');

    if (!(login && password)) {
        e.preventDefault();
    }
});

function checkSimpleField(form, element, errorClassName) {
    removeErrors(form, errorClassName);
    return checkBlanked(element, errorClassName);
}
function checkEmailSignUp() {
    removeErrors(formSignUp, 'error-email-sign-up');
    
    let result = checkEmail(emailSignUp, 'error-email-sign-up');
    result = result && checkBlanked(emailSignUp, 'error-email-sign-up');

    return result;
}
function getErrorBlock(msg, className) {
    let error = document.createElement('div');
    error.className = className;
    error.style.color = 'red';
    error.textContent = msg;

    return error;
}
function checkBlanked(el, errorClassName) {
    if (!el.value) {
        let error = getErrorBlock("Cannot be blank", errorClassName);
        el.parentElement.insertBefore(error, el.nextSibling);

        return false;
    }
    return true;
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
        let error = getErrorBlock("Password doesn't match", errorClassName);
   
        repassword.parentElement.insertBefore(error, repassword.nextSibling);
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
function checkRepasswordSignUp() {
    removeErrors(formSignUp, 'error-repassword-sign-up');
    let isNotBlank =  checkBlanked(repasswordSignUp, 'error-repassword-sign-up');
    let isSamePassword = checkPasswordMatch(passwordSignUp, repasswordSignUp, 'error-repassword-sign-up');

    return isNotBlank && isSamePassword;
}