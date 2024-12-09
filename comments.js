//start a webserver
//import express
const express = require('express');
//create an express app
const app = express();
//import commentsRouter
const commentsRouter = require('./commentsRouter');
//use commentsRouter
app.use('/comments', commentsRouter);
//start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});