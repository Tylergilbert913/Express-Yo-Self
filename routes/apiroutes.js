const fs = require("fs");
const path = require("path");
const express = require("express");

// exports routes
module.exports = (app) => {

  // GET route for api
  app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  });

  // POST route for api
  app.post('/api/notes', (req, res) => {
    let note = req.body;
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      res.send(data);
      const takerArray = JSON.parse(data);
      takerArray.push(note);
      fs.writeFile('./db/db.json', JSON.stringify(takerArray), err => {
        if (err) throw err;
        return true;
      });
    });

    // DELETE route for api
    app.delete('/api/notes:id', (req, res) => {
      let note = fs.readFile(path.join(__dirname, './db/db.json'), 'utf-8');
      note = JSON.parse(note);
      console.log("is this working:" + note)
      note = notes.filter(function(note) {
          if (req.params.id != note.id)
          return true;
          else return false;
      });
      fs.writeFile(path.join(__dirname, './db/db.json'), JSON.stringify(note));
      res.json(note);
  });
  })};

