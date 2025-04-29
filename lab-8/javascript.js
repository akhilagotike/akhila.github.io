function validateForm() {
    let isValid = true;

    // Get form field values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Clear all previous error messages
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Validate empty fields
    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "First name is required.";
        isValid = false;
    }

    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "Last name is required.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else {
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Invalid email format.";
            isValid = false;
        }
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }

    return isValid;
}
