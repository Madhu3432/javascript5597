let name = "John";
let age = 30;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);


let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);


let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside.");
} else if (temperature > 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's cold outside.");
}


for (let i = 0; i < 5; i++) {
    console.log("Iteration " + (i + 1));
}


function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");



let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Accessing the first element
console.log(fruits.length); // Array length

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

console.log(person.name);
console.log(person.age);
