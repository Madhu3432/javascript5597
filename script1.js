function createConcatPrint() {
    var inputString = document.getElementById("inputString").value;
    var resultElement = document.getElementById("result");

    // Create and print the original string
    var originalString = "Original String: " + inputString;

    // Concatenate a new string
    var concatenatedString = "Concatenated String: " + inputString + " - Hello World!";

    // Access substring
    var substring = "Substring: " + inputString.slice(0, 5);

    // Display results
    resultElement.innerHTML = originalString + "<br>" + concatenatedString + "<br>" + substring;
}
