// SIGN UP
function signup() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.find(u => u.email === email);

    if (userExists) {
        alert("User already exists!");
        return;
    }

    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful!");

    // redirect to login
    window.location.href = "login.html";
}


// LOGIN
function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(u => u.email === email && u.password === password);

    if (!validUser) {
        alert("Invalid Credentials!");
        return;
    }

    // session store
    localStorage.setItem("currentUser", JSON.stringify(validUser));

    alert("Login Successful!");

    // redirect
    window.location.href = "dashboard.html";
}


// LOGOUT
function logout() {
    localStorage.removeItem("currentUser");

    alert("Logged out!");

    window.location.href = "login.html";
}


// FORGOT PASSWORD
function resetPassword() {

    let email = document.getElementById("resetEmail").value;
    let newPassword = document.getElementById("newPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userIndex = users.findIndex(u => u.email === email);

    if (userIndex === -1) {
        alert("Email not found!");
        return;
    }

    users[userIndex].password = newPassword;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Password Updated!");

    window.location.href = "login.html";
}