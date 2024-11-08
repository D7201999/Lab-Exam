function validateLogin() {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    let isValid = true;

    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Username and password check
    if (username !== "dineshkumardk78956@gmail.com") {
        isValid = false;
        document.getElementById("usernameError").textContent = "Incorrect username.";
    }

    if (password !== "Passw0rd!") {
        isValid = false;
        document.getElementById("passwordError").textContent = "Incorrect password.";
    }

    // If both username and password are correct, log in
    if (isValid) {
        alert("Login successful!");
        document.body.innerHTML="Login Successful";
        // Here you could redirect to another page or perform other actions
    } else {
        alert("Login failed. Please check your username and password.");
    }
}