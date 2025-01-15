class ChatUI {
    constructor() {
        this.chatList = document.querySelector('.chat-list');
        this.typingInput = document.querySelector('.typing-input textarea');
        this.sendButton = document.querySelector('#send-btn');
        this.deleteButton = document.querySelector('#delete-btn');
        this.titleHeading = document.querySelector('.title-heading');
        this.secondTitleHeading = document.querySelector('.second-title-heading');
        const signoutBtn = document.querySelector('header .signout-btn');


        this.sendButton.addEventListener('click', () => this.handleSend());
        this.deleteButton.addEventListener('click', () => this.handleDelete());
        if (signoutBtn) {
            signoutBtn.addEventListener('click', () => {
                window.location.href = 'WelcomePage.html';  // מעבר לדף הראשי
            });
        }

        this.typingInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSend();
            }
        });

    }

    handleSend() {
        const message = this.typingInput.value.trim();
        if (!message) return;

        this.addMessage(message, true);

        setTimeout(() => {
            this.addMessage("This is a prototype version.", false);
        }, 500);

        // ניקוי שדה הטקסט
        this.typingInput.value = '';
    }

    handleDelete() {
        const isConfirmed = confirm("Are you sure you want to delete your chat?");

        if (isConfirmed) {
            while (this.chatList.firstChild) {
                this.chatList.removeChild(this.chatList.firstChild);
            }

            if (this.titleHeading && this.secondTitleHeading) {
                this.titleHeading.style.display = 'block';
                this.secondTitleHeading.style.display = 'block';
            }
        }
    }

    addMessage(message, isUser) {
        if (this.titleHeading && this.secondTitleHeading) {
            this.titleHeading.style.display = 'none';
            this.secondTitleHeading.style.display = 'none';
        }

        const chatDiv = document.createElement('div');
        chatDiv.className = `chat ${isUser ? 'outgoing' : 'incoming'}`;

        chatDiv.innerHTML = `
            <div class="chat-content">
                <div class="chat-details">
                    <img src="../imgs/${isUser ? 'Student Profile.jpg' : 'Camel Avatar.jpg'}" alt="avatar">
                    <p>${message}</p>
                </div>
            </div>
        `;

        this.chatList.appendChild(chatDiv);
        this.chatList.scrollTop = this.chatList.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChatUI();
});

