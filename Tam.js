function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

var celsiusTemperature = 25;
var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(celsiusTemperature + "°C is " + fahrenheitTemperature.toFixed(2) + "°F");

var fahrenheitTemperature2 = 77;
var celsiusTemperature2 = fahrenheitToCelsius(fahrenheitTemperature2);
console.log(fahrenheitTemperature2 + "°F is " + celsiusTemperature2.toFixed(2) + "°C");
