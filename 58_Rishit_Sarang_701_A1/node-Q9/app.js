const fs = require('fs');
const path = require('path');

const sampleFile = path.join(__dirname, 'files', 'sample.txt');
const newFile = path.join(__dirname, 'files', 'newFile.txt');
const renamedFile = path.join(__dirname, 'files', 'renamedFile.txt');
const newFolder = path.join(__dirname, 'files', 'newFolder');

// 1. Write to a file (async)
fs.writeFile(newFile, 'Hello from Node.js!', (err) => {
  if (err) throw err;
  console.log('✅ Step 1: File written -> newFile.txt');

  // 2. Read a file (sync)
  const content = fs.readFileSync(sampleFile, 'utf-8');
  console.log('📄 Step 2: Content of sample.txt:', content);

  // 3. Append to a file (async)
  fs.appendFile(sampleFile, '\n➕ Appended line.', (err) => {
    if (err) throw err;
    console.log('✅ Step 3: Data appended to sample.txt');

    // 4. Rename a file (sync)
    if (fs.existsSync(newFile)) {
      fs.renameSync(newFile, renamedFile);
      console.log('✏️ Step 4: File renamed -> renamedFile.txt');
    }

    // 5. Delete a file (async)
    fs.unlink(renamedFile, (err) => {
      if (err) {
        console.log('⚠️ Step 5: File not found to delete');
      } else {
        console.log('🗑️ Step 5: File deleted -> renamedFile.txt');
      }

      // 6. Check if file exists
      if (fs.existsSync(sampleFile)) {
        console.log('✅ Step 6: sample.txt exists');
      } else {
        console.log('❌ Step 6: sample.txt does not exist');
      }

      // 7. Create a new folder (if it doesn’t exist)
      if (!fs.existsSync(newFolder)) {
        fs.mkdirSync(newFolder);
        console.log('📁 Step 7: Folder created -> newFolder');
      }

      // 8. Read all files in directory
      const files = fs.readdirSync(path.join(__dirname, 'files'));
      console.log('📂 Step 8: Files in /files:', files);
    });
  });
});
