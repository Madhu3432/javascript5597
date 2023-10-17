let x = 10;
let y = 5;

if (x > y) {
    console.log("x is greater than y");
} else if (x < y) {
    console.log("y is greater than x");
} else {
    console.log("x and y are equal");
}

let conditionA = true;
let conditionB = false;

if (conditionA && conditionB) {
    console.log("Both conditions are true");
} else if (conditionA || conditionB) {
    console.log("At least one condition is true");
} else {
    console.log("Neither condition is true");
}
