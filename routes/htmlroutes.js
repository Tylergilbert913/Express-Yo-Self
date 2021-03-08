// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');

// ROUTING

module.exports = (app) => {
  
  app.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, '.assets/notes.html'));
});

// when any other route is accessed display index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './asset/index.html'));
});

// updating the json whenever something is adjusted
const dbUpdate = () => {
    fs.writeFile('./db/db.json', JSON.stringify(notes, '\t'), err => {
        if (err) throw err;
        return true;
    });
};


  
};
