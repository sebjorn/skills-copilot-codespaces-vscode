//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getComments, addComment } = require('./comments.js');

app.use(bodyParser.json());

//Get all comments
app.get('/comments', (req, res) => {
  res.json(getComments());
});

//Add a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  addComment(comment);
  res.status(201).json(comment);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});