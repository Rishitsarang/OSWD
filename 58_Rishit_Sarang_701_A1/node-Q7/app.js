const fetch = require('node-fetch');

async function fetchGooglePage() {
  try {
    const response = await fetch('https://www.google.com');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const body = await response.text();

    // Print first 500 characters of Google's homepage HTML
    console.log(body.slice(0, 500));
  } catch (error) {
    console.error('Error fetching Google page:', error);
  }
}

fetchGooglePage();
