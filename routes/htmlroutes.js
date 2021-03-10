const path = require('path');
const express = require("express");
const app = express;

module.exports = (app) => {
  
  // this routes to the main index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './assets/index.html'));
});

// this toutes to the notes page
app.get('/notes', (req, res) => {

  res.sendFile(path.join(__dirname, '../assets/notes.html'));
});

// this is if theres no matching route, then its rerouted to the main index page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/index.html'));
});
  
};
