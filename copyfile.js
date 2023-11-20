const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function promptForFileName(promptText) {
    return new Promise((resolve) => {
        rl.question(promptText, (fileName) => {
            resolve(fileName);
        });
    });
}


function copyFileContents(sourceFile, destinationFile) {
    try {
        const content = fs.readFileSync(sourceFile, 'utf8');
        fs.writeFileSync(destinationFile, content, 'utf8');
        console.log(`Contents of '${sourceFile}' successfully copied to '${destinationFile}'.`);
    } catch (error) {
        console.error(`Error copying file: ${error.message}`);
    }
}


async function copyFileScript() {
    const sourceFileName = await promptForFileName('Enter the name of the source text file: ');
    const destinationFileName = await promptForFileName('Enter the name of the destination text file: Madhu');

    copyFileContents(sourceFileName, destinationFileName);


    rl.close();
}


copyFileScript();
