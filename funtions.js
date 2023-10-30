// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// A simple promise example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");

        }, 2000);
    });
}

fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });




const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the homepage!");
});

app.get("/about", (req, res) => {
    res.send("About us page.");
});

app.get("/contact", (req, res) => {
    res.send("Contact us page.");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

