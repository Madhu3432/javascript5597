// Push()

let fruits1 = ["apple", "banana"];
fruits1.push("cherry");
console.log(fruits1);

// -----------------------------------------------------------------
//pop()

let fruits2 = ["apple", "banana", "cherry"];
let removedFruit = fruits2.pop();
console.log(fruits2);
console.log(removedFruit);

// ------------------------------------------------------------

// shift()

let fruits3 = ["apple", "banana", "cherry"];
let removedFruit1 = fruits3.shift();
console.log(fruits3);
console.log(removedFruit1);


// -------------------------------------------------------------------
//unshift

let fruits4 = ["banana", "cherry"];
fruits4.unshift("apple");
console.log(fruits4);

// --------------------------------------------------------------------------
// concat()
let fruits5 = ["apple", "banana"];
let fruits6 = ["cherry", "date"];
let combinedFruits = fruits5.concat(fruits6);
console.log(combinedFruits);

// ---------------------------------------------------------------------------

// slice()

let fruits7 = ["apple", "banana", "cherry", "date"];
let selectedFruits = fruits7.slice(1, 3);
console.log(selectedFruits);

// ----------------------------------------------------------------------------

//splice()

let fruits8 = ["apple", "banana", "cherry"];
fruits8.splice(1, 1, "date");
console.log(fruits8);

// -------------------------------------------------------------------------------
// forEach()

let numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(function (number) {
    console.log(number * 2);
});

// --------------------------------------------------------
// filter()

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers);

// -----------------------------------------------------------

// map()

let numbers2 = [1, 2, 3, 4, 5];
let squaredNumbers = numbers2.map(function (number) {
    return number * number;
});
console.log(squaredNumbers);










