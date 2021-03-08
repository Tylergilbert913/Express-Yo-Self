const fs = require("fs");
const path = require("path");


module.exports = (app) => {

  // app.get('/api/notes', (req, res) => {

  //   // this reads the db.json file and returns all saved notes as JSON
  //   res.json(notes);
  //   console.log(notes);
  // });

  // // POST route for the api/notes
  // // api/ also allows other coders to know that this is referencing json data
  // app.post('/api/notes', (req, res) => {
  //   let newNote = req.body;
  //   notes.push(newNote);
  //   dbUpdate();
  //   return console.log(`New note added: ${newNote.title}`);
  // });

  // // setting and getting a specfici ID to each note
  // app.get('/api/notes/:id', (req, res) => {
  //   res.json(notes[req.params.id]);
  // });


  // // because we set the id above we can now target it and delete it
  // app.delete('/api/notes/:id', (req, res) => {
  //   notes.splice(req.params.id, 1);
  //   dbUpdate();
  //   console.log(`CTRL ALT DEL ${req.params.id}`);
  // });


  // app.get('/notes', (req, res) => res.json(tableData));

  // app.post('../assets/notes.html', (req, res) => {


  //   });

  //   app.post('/api/clear', (req, res) => {
  //     // Empty out the arrays of data

  //   });
};
