const passwordInput = document.querySelector('input[type="password"]');
const toggleButton = document.querySelector('.passvisibility img');
const forgotPasswordLink = document.querySelector('.hyperlink');
const usernameInput = document.querySelector('input[name="username"]');
const loginBtn = document.querySelector('.btn');

// validation function
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


loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // user vailidation
    const usernameError = validateUsername(usernameInput.value);
    if (usernameError) {
        alert(usernameError);
        usernameInput.focus();
        return;
    }

    // pass vailidation
    const passwordError = validatePassword(passwordInput.value);
    if (passwordError) {
        alert(passwordError);
        passwordInput.focus();
        return;
    }

    // if procees successful
    alert('Login successful!');
    window.location.href = 'ChooseCoursePage.html';
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


if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();


        if (!usernameInput.value.trim()) {
            alert("Please enter your username first to receive password reset instructions.");
            usernameInput.focus();
            return;
        }

        alert(`An email with password reset instructions has been sent to ${usernameInput.value}@post.ac.il`);
    });
}



