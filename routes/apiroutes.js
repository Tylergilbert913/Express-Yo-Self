const fs = require("fs");
const path = require("path");


module.exports = (app) => {

  app.get('/api/notes', (req, res) => {

  
    res.json(notes);
    console.log(notes);
  });

  
  app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
    dbUpdate();
    return console.log(`New note added: ${newNote.title}`);
  });

  
  app.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id]);
  });


  app.delete('/api/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);
    dbUpdate();
    console.log(`CTRL ALT DEL ${req.params.id}`);
  });


  app.get('/notes', (req, res) => res.json(tableData));

  app.post('../assets/notes.html', (req, res) => {


    });

    app.post('/api/clear', (req, res) => {

    });
};
