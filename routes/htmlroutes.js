const path = require('path');
const express = require("express");
const app = express;

module.exports = (app) => {
  
  
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/index.html'));
});

app.get('/notes', (req, res) => {

  res.sendFile(path.join(__dirname, '../assets/notes.html'));
});



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../assets/index.html'));
});
  
};
