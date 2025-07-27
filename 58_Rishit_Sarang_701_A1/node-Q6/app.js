const fs = require('fs');
const util = require('util');

// Promisify fs.unlink
const unlinkAsync = util.promisify(fs.unlink);

// Async function to delete a file
async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`File deleted successfully: ${filePath}`);
  } catch (err) {
    console.error(`Error deleting file: ${err.message}`);
  }
}

// Example usage:
const fileToDelete = './fileToDelete.txt';

// Create the file first for demonstration (so it exists)
fs.writeFileSync(fileToDelete, 'This file will be deleted.');

console.log(`Created file: ${fileToDelete}`);

// Now delete it using promisified unlink
deleteFile(fileToDelete);
