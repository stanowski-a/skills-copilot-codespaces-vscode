// Create web server
// Use express module to create server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// Create a new array to store comments
const comments = [];
// Create a new comment
app.post('/comments', (req, res) => {
  // Get the comment from the request
  const comment = req.body;
  // Add the comment to the array
  comments.push(comment);
  // Send the comment back to the client
  res.json(comment);
});
// Get all comments
app.get('/comments', (req, res) => {
  // Send all comments back to the client
  res.json(comments);
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});