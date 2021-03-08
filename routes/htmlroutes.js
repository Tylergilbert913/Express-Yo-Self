const fs = require("fs");
const path = require('path');

module.exports = (app) => {
  
  app.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, './assets/notes.html'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './asset/index.html'));
});

const dbUpdate = () => {
    fs.writeFile('./db/db.json', JSON.stringify(notes, '\t'), err => {
        if (err) throw err;
        return true;
    });
};


  
};
