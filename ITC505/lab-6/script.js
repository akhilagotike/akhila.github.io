document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const outputDiv = document.getElementById('output');
    const lastModifiedSpan = document.getElementById('lastModified');

    submitButton.addEventListener('click', function() {
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        if (name && email && message) {
            outputDiv.textContent = `Name: ${name}, Email: ${email}, Message: ${message}`;
        } else {
            outputDiv.textContent = "Please fill in all fields.";
        }
    });

    lastModifiedSpan.textContent = document.lastModified;
});