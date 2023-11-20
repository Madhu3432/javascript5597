class PowerCalculator {
    constructor() { }

    pow(x, n) {
        if (n === 0) {
            return 1;
        } else if (n < 0) {
            // If the exponent is negative, calculate reciprocal
            x = 1 / x;
            n = -n;
        }

        let result = 1;

        while (n > 0) {
            if (n % 2 === 1) {
                // If n is odd, multiply result by x
                result *= x;
            }

            // Square x and divide n by 2
            x *= x;
            n = Math.floor(n / 2);
        }

        return result;
    }
}

// Example usage:
const powerCalculator = new PowerCalculator();
const base = 2;
const exponent = 3;
const result = powerCalculator.pow(base, exponent);
console.log(result);  // Output: 8
