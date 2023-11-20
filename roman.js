class IntegerToRomanConverter {
    constructor() {
        this.numeralMap = [
            { value: 1000, symbol: 'M' },
            { value: 900, symbol: 'CM' },
            { value: 500, symbol: 'D' },
            { value: 400, symbol: 'CD' },
            { value: 100, symbol: 'C' },
            { value: 90, symbol: 'XC' },
            { value: 50, symbol: 'L' },
            { value: 40, symbol: 'XL' },
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
        ];
    }

    convertToRoman(num) {
        if (num <= 0 || num > 3999) {
            throw new Error("Number out of range. Please enter a number between 1 and 3999.");
        }

        let result = '';

        for (const pair of this.numeralMap) {
            while (num >= pair.value) {
                result += pair.symbol;
                num -= pair.value;
            }
        }

        return result;
    }
}

// Example usage:
const converter = new IntegerToRomanConverter();
const integerNumber = 3549;
const romanNumeral = converter.convertToRoman(integerNumber);
console.log(romanNumeral); 
