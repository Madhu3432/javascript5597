// Exporting functions and variables
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Importing a module
import { add, subtract } from './math.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(8, 2)); // Output: 6
