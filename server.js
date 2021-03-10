const express = require("express");
const path = ("path");
const fs = require("fs");


const app = express();


const PORT = process.env.PORT || 3253;

app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

