const express = require('express');
const logger = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');



const app = express();

app.use(logger('dev'));

app.use(express.json());
// Configure both serve-favicon & static
// middleware to server from the 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

// The following "catch all" route (note the *) 
// is necessary to return the index.html on ALL
// non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  
  // Configure express app to listen on port 3001
  // to avoid conflicting with the react server
  const port = process.env.PORT || 3001;
  
  app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
  });