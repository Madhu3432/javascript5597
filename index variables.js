var name1 = "Reddy";
var age1 = 30;

function greet() {

    console.log(name1);
    console.log(age1);
}
console.log(name1);
console.log(age1);

// ------------------------------------------------------

let name2 = "Madhu";
let age2 = 25;
if (true) {
    let age = 30;
    console.log(name2);
}
console.log(name2);
console.log(age2); // Not accessible (undefined)

// -----------------------------------------------

const name3 = "Joi";
let age3 = 35;
if (true) {
    console.log(name3);
}
console.log(name3);
console.log(age3);
age3 = 35; // Error: Assignment to constant variable

