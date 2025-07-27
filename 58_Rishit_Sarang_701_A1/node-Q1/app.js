const express = require('express');
const app = express();
const port = 8080;

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

// Route: GET /gethello
app.get('/gethello', (req, res) => {
    res.send('Hello NodeJS!!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at PORT: ${port}`);
});
