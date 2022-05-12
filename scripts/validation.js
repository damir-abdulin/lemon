const formSignUp = document.getElementById('sign-up');
const buttonSignUp = document.getElementById('btsignup');
const emailSignUp = document.getElementById('sign-up-email');
const usernameSignUp = document.getElementById('sign-up-username');
const passwordSignUp = document.getElementById('sign-up-password');
const repasswordSignUp = document.getElementById('sign-up-repassword');
const fieldsSignUp = document.getElementsByClassName('field-sign-up');

formSignUp.addEventListener('submit', function (e) {
    e.preventDefault();

    for (let i = 0; i < fieldsSignUp.length; i++) {
        if (!fieldsSignUp[i].value) {
            console.log('field is blank', fieldsSignUp[i])
            var error = document.createElement('div')
            error.className='error'
            error.style.color = 'red'
            error.innerHTML = 'Cannot be blank'
            formSignUp[i].parentElement.insertBefore(error, fieldsSignUp[i])
        }
    }
});