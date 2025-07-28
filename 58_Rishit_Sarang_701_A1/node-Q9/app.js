const fs = require('fs');

// Step 1: Create file
fs.writeFileSync('example.txt', 'This is a file created using fs module.');
console.log('File created successfully!');

// Step 2: Read file
const content = fs.readFileSync('example.txt', 'utf-8');
console.log('File content:', content);

// Step 3: Append to file
fs.appendFileSync('example.txt', '\nAppended line.');
console.log('Content appended.');

// Step 4: Rename file
fs.renameSync('example.txt', 'renamed.txt');
console.log('File renamed to renamed.txt');

// // Step 5: Delete file
// fs.unlinkSync('renamed.txt');
// console.log('File deleted.');
