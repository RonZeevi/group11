const passwordInput = document.querySelector('input[name="password"]');
const toggleButton = document.querySelector('.passvisibility img');
const loginLink = document.querySelector('.hyperlink');
const fullnameInput = document.querySelector('input[name="fullname"]');
const emailInput = document.querySelector('input[name="email"]');
const usernameInput = document.querySelector('input[name="username"]');
const signupBtn = document.querySelector('.btn');

const validateFullName = (fullname) => {
    if (fullname === '') {
        return 'Full name is required';
    }

    if (!/^[a-zA-Z\s]+$/.test(fullname)) {
        return 'Full name can only contain letters and spaces';
    }


    const nameParts = fullname.trim().split(/\s+/);


    if (nameParts.length < 2) {
        return 'Please enter both first name and last name';
    }

    for (const part of nameParts) {
        if (part.length < 2) {
            return 'Each name part must be at least 2 characters long';
        }
    }

    return '';
};

const validateEmail = (email) => {
    if (email === '') {
        return 'Email is required';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Please enter a valid email address';
    }

    if (!email.endsWith('@post.bgu.ac.il')) {
        return 'Email must be a BGU email address (@post.bgu.ac.il)';
    }

    return '';
};

const validateUsername = (username) => {
    if (username === '') {
        return 'Username is required';
    }

    if (username.includes(' ')) {
        return 'Username cannot contain spaces';
    }

    if (username.length < 3) {
        return 'Username must be at least 3 characters long';
    }

    if (username.length > 20) {
        return 'Username cannot be longer than 20 characters';
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        return 'Username can only contain English letters and numbers';
    }

    return '';
};

const validatePassword = (password) => {
    if (password === '') {
        return 'Password is required';
    }

    if (password.length < 8) {
        return 'Password must be at least 8 characters long';
    }

    if (!/[A-Z]/.test(password)) {
        return 'Password must contain at least one uppercase letter';
    }

    if (!/[0-9]/.test(password)) {
        return 'Password must contain at least one number';
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return 'Password must contain at least one special character';
    }

    return '';
};

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const fullnameError = validateFullName(fullnameInput.value);
    if (fullnameError) {
        alert(fullnameError);
        fullnameInput.focus();
        return;
    }

    const emailError = validateEmail(emailInput.value);
    if (emailError) {
        alert(emailError);
        emailInput.focus();
        return;
    }

    const usernameError = validateUsername(usernameInput.value);
    if (usernameError) {
        alert(usernameError);
        usernameInput.focus();
        return;
    }

    const passwordError = validatePassword(passwordInput.value);
    if (passwordError) {
        alert(passwordError);
        passwordInput.focus();
        return;
    }

    alert('Sign up successful!');
    window.location.href = 'LoginPage.html';
});

toggleButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.src = '../imgs/view.png';
    } else {
        passwordInput.type = 'password';
        toggleButton.src = '../imgs/hide.png';
    }
});

if (loginLink) {
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'LoginPage.html';
    });
}
