function validateForm() {
    let isValid = true;

    // Username Validation
    const username = document.getElementById("username").value;
    const usernamePattern = /^(?!\d)\w{5,15}$/;
    if (!usernamePattern.test(username)) {
        isValid = false;
        document.getElementById("usernameError").textContent = "Username should be 5-15 characters long and contain only letters and numbers.";
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    // Email Validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov)$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById("emailError").textContent = "Enter a valid email address.";
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password Validation
    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        isValid = false;
        console.log(password);
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long and contain at least one letter and one number.";
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Phone Number Validation
    const phone = document.getElementById("phone").value;
    const phonePattern = /^\+91[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        document.getElementById("phoneError").textContent = "Phone number must start with +91 and be 13 digits long.";
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Date of Birth Validation
    const dob = document.getElementById("dob").value;
    if (dob === "") {
        isValid = false;
        document.getElementById("dobError").textContent = "Date of birth is required.";
    } else {
        document.getElementById("dobError").textContent = "";
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert("Registration successful!");
        document.getElementById("registrationForm").submit();
    }
}
