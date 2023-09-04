const num1 = 5;
const num2 = 7;
const str1 = '5';
const str2 = '7';
const boolTrue = true;
const boolFalse = false;

// Equal and Not Equal Comparison
console.log(num1 == str1); // true (loose equality, coerces types)
console.log(num1 === str1); // false (strict equality, checks types)
console.log(num1 != num2); // true (not equal)
console.log(str1 != str2); // true (not equal)

// Strict Not Equal Comparison
console.log(num1 !== str1); // true (strict not equal, checks types)
console.log(num1 !== num2); // true (strict not equal)

// Boolean Operations
console.log(boolTrue && boolFalse); // false (logical AND)
console.log(boolTrue || boolFalse); // true (logical OR)
console.log(!boolTrue); 