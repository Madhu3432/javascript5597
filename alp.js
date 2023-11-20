const fs = require('fs');

class UniqueWordsPrinter {
    constructor() {
        this.uniqueWords = new Set();
    }

    processFile(filePath) {
        try {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const words = this.extractWords(fileContent);
            this.addUniqueWords(words);
            this.printUniqueWords();
        } catch (error) {
            console.error(`Error reading the file: ${error.message}`);
        }
    }

    extractWords(text) {
        // Use a regular expression to extract words from the text
        return text.match(/\b\w+\b/g) || [];
    }

    addUniqueWords(words) {
        words.forEach(word => this.uniqueWords.add(word.toLowerCase()));
    }

    printUniqueWords() {
        const sortedUniqueWords = Array.from(this.uniqueWords).sort();
        console.log("Unique words in alphabetical order:");
        sortedUniqueWords.forEach(word => console.log(word));
    }
}

// Example usage:
const fileProcessor = new UniqueWordsPrinter();
const filePath = 'path/to/your/text/file.txt';
fileProcessor.processFile(filePath);
