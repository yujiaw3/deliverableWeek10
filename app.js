// Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Database setup
require('./models/db.js');

// Routes setup
var routes = require('./routes/routes.js');
app.use('/',routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
   console.log(`Express listening on port ${PORT}`)
});