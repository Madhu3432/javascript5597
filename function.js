// Named Function:

function greet(name) {
    console.log(`${name}!`);
}

greet("Gangireddy");

// ------------------------------------

// Anonymous Function:

let greet1 = function (name) {
    console.log(`${name}!`);
};

greet1("reddy");

// ---------------------------------------

// Arrow Function:

const greet2 = (name) => {
    console.log(`${name}!`);
};

greet2("Charlie");

// --------------------------------------------

// Higher-Order Function:

function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const result = operate(3, 4, add);

//   ---------------------------------------------

// callback function


function fetchData(callback) {
    setTimeout(() => {
        callback("Hi Man");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

// ---------------------------------------------------

// Generator Function:

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generateSequence();
console.log(gen.next().value);
console.log(gen.next().value);

// -------------------------------------------------------
// Constructor Function:

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const john = new Person("Mad", "leo");
console.log(john.firstName);

// ------------------------------------------------------







