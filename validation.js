document.getElementById('registrationForm').addEventListener('submit', function(event)){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password =document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let usernameError = document.getElementById('usernameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');
    
    usernameError.textContent = '';
    emailError.textContent ='';
    passwordError.textContent ='';
    confirmPasswordError.textContent ='';

    if (username === '') {
        usernameError.textContent = 'username is required';
        event.preventDefault();
    }

    if (email === '') {
        usernameError.textContent = 'email is required';
        event.preventDefault();
    }

    if (password === '') {
        passwordError.textContent = 'password is required';
        event.preventDefault();
    } else if (password.length < 6) {
        passwordError.textContent = 'password must be at least 6 charaters';
        event.preventDefault();
    }

    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Please confirm password';
        event.preventDefault();
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        event.preventDefault();
    }
};