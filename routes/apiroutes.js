const fs = require("fs");
const path = require("path");
// const express = require("express");


module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  });

  
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

    app.delete('/api/notes', (req, res) => {
      let notes = fs.readFileSync(path.join(__dirname, './db/db.json'), 'utf-8');
      notes = JSON.parse(notes);
      notes = notes.filter(function(note) {
          if (req.params.id != note.id)
          return true;
          else return false;
      });
      fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(notes));
      res.json(notes);
  });
  })};

