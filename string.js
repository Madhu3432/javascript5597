// Reverse a string using a for loop
const inputString = "Hello";

let reversedString = "";
for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
}

console.log("Reversed String:", reversedString);
