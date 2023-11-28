function performOperation(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultElement = document.getElementById("result");

    switch (operation) {
        case 'add':
            resultElement.textContent = "Result: " + (num1 + num2);
            break;
        case 'subtract':
            resultElement.textContent = "Result: " + (num1 - num2);
            break;
        case 'multiply':
            resultElement.textContent = "Result: " + (num1 * num2);
            break;
        case 'divide':
            if (num2 !== 0) {
                resultElement.textContent = "Result: " + (num1 / num2);
            } else {
                resultElement.textContent = "Cannot divide by zero!";
            }
            break;
        default:
            resultElement.textContent = "Invalid operation";
    }
}
