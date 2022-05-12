const formSignUp  = document.getElementById('sign-up');
const emailSignUp = document.getElementById('sign-up-email');
const emailErrorSignUp = document.getElementById('sign-up-email-error');

emailSignUp.addEventListener('input', function (event) {
    if (emailSignUp.validity.valid) {
        emailErrorSignUp.textContent = '';
        emailErrorSignUp.className = 'sign-up-email-error'; 
    } else {
        showError();
    } 
});

formSignUp.addEventListener('submit', function (event) {
    if(!emailSignUp.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if(emailSignUp.validity.valueMissing) {
    emailErrorSignUp.textContent = 'You need to enter an e-mail address.';
    } else if(emailSignUp.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if(emailSignUp.validity.tooShort) {
    emailErrorSignUp.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }

    emailErrorSignUp.className = 'sign-up-email-error active';
}