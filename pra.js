// Using a while loop to count even and odd numbers
let start = 1;
let end = 10;
let evenCount = 0;
let oddCount = 0;

while (start <= end) {
    if (start % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
    start++;
}

console.log("Using while loop:");
console.log("Even numbers: " + evenCount);
console.log("Odd numbers: " + oddCount);

// Using a do-while loop to count even and odd numbers
start = 1;
end = 10;
evenCount = 0;
oddCount = 0;

do {
    if (start % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
    start++;
} while (start <= end);

console.log("Using do-while loop:");
console.log("Even numbers: " + evenCount);
console.log("Odd numbers: " + oddCount);

// Using a for loop to count even and odd numbers
start = 1;
end = 10;
evenCount = 0;
oddCount = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Using for loop:");
console.log("Even numbers: " + evenCount);
console.log("Odd numbers: " + oddCount);
