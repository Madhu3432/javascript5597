class StringReverser {
    constructor() { }

    reverseWords(inputString) {
        // Split the string into an array of words
        const wordsArray = inputString.split(' ');

        // Reverse the array of words
        const reversedArray = wordsArray.reverse();

        // Join the reversed array back into a string
        const reversedString = reversedArray.join(' ');

        return reversedString;
    }
}

// Example usage:
const stringReverser = new StringReverser();
const inputString = "Hello World";
const reversedString = stringReverser.reverseWords(inputString);
console.log(reversedString);  // Output: "World Hello"
