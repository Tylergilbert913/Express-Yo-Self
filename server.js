// variable depedencies
const express = require("express");
const path = require("path");
const fs = require("fs");
// calling the express
const app = express();

// Port setup
const PORT = process.env.PORT || 3253;
// middleware
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// importing the routes
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

// assigning the listener for the PORT
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

