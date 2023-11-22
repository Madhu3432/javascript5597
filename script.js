function signIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Madhu" && password === "Madhu@123") {
        alert("Login Successful");
        window.location.assign("index1.html");
    } else {
        alert("Invalid username or password");
    }
}
