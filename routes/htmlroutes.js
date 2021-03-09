const fs = require("fs");
const path = require('path');
const express = require("express");

module.exports = (app) => {
  
  app.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, './assets/notes.html'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './asset/index.html'));
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './asset/index.html'));
});
  
};
