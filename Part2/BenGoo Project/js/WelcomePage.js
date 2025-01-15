const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const studentBtn = document.querySelector('.role-option.student');
const lecturerBtn = document.querySelector('.role-option.lecturer');

let selectedRole = null;

studentBtn.addEventListener('click', () => {
    selectedRole = 'student';
    studentBtn.classList.add('selected');
    lecturerBtn.classList.remove('selected');
});

lecturerBtn.addEventListener('click', () => {
    selectedRole = 'lecturer';
    lecturerBtn.classList.add('selected');
    studentBtn.classList.remove('selected');
});


function handleButtonClick(event) {
    if (!selectedRole) {
        alert("Please select a role before proceeding.");
        shakeButtons();
        return;
    }


    const targetPage = event.target === signupBtn ? 'SignUpPage.html' : 'LoginPage.html';
    window.location.href = targetPage;
}


function shakeButtons() {
    [studentBtn, lecturerBtn].forEach(button => {
        button.classList.remove('shake-animation');
        void button.offsetWidth;  // Trigger reflow
        button.classList.add('shake-animation');
    });
}


signupBtn.addEventListener('click', handleButtonClick);
loginBtn.addEventListener('click', handleButtonClick);

[studentBtn, lecturerBtn].forEach(button => {
    button.addEventListener('animationend', () => {
        button.classList.remove('shake-animation');
    });
});