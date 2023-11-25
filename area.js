function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

var area = calculateCircleArea(5);
console.log("Circle Area:", area.toFixed(2));
