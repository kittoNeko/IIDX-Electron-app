const path = require('path');
const fs = require('fs');
export default function printMe() {
    console.log('I get called from print.js!');
    try { 
        fs.writeFileSync('myfile.txt', 'the text to write in the file', 'utf-8');
    }
    catch(e) { 
        alert(e.message); 
    }
}