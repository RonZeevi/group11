const selectButton = document.querySelector('.btn');
const courseSelect = document.querySelector('.course-select');
const signoutBtn = document.querySelector('header .signout-btn');

function validateSelection() {
    if (courseSelect.value !== 'בחר קורס') {
        selectButton.disabled = false;
    } else {
        selectButton.disabled = true;
    }
}

function redirectToChatPage() {
    window.location.href = '../templates/Chat.html';
}

courseSelect.addEventListener('change', validateSelection);


selectButton.disabled = true;

selectButton.addEventListener('click', redirectToChatPage);

if (signoutBtn) {
    signoutBtn.addEventListener('click', () => {
        window.location.href = 'WelcomePage.html';  // מעבר לדף הראשי
    });
}