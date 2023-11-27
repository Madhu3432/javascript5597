function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}

var checkPalindrome = isPalindrome("A man, a plan, a canal, Panama!");
console.log("Is Palindrome:", checkPalindrome);
