const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');

// Absolute path to your zip file
const zipFilePath = 'F:/ICT/sem3/OSWD/58_Rishit_Sarang_701_A1/node-Q4/files_to_zip.zip';

// Destination folder for extraction
const extractToFolder = 'F:/ICT/sem3/OSWD/58_Rishit_Sarang_701_A1/node-Q5/files_to_zip.zip';

async function unzipFile(zipPath, extractPath) {
  try {
    if (!fs.existsSync(zipPath)) {

      console.error(`Zip file does not exist: ${zipPath}`);
      return;
    }

    if (!fs.existsSync(extractPath)) {
      fs.mkdirSync(extractPath, { recursive: true });
    }

    console.log(`Extracting ${zipPath} to ${extractPath} ...`);

    await fs.createReadStream(zipPath)
      .pipe(unzipper.Extract({ path: extractPath }))
      .promise();

    console.log('Extraction complete!');
  } catch (err) {
    console.error('Error during extraction:', err);
  }
}

unzipFile(zipFilePath, extractToFolder);
