const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const path      = require('path');

const app = express();

// if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
// }

//routes
const users = require('./routes/users');
const places = require('./routes/places');




app.use(express.static(__dirname + '/src'));
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req,res,next){setTimeout(next,1000)})

app.use('/api/users', users);
app.use('/api/places', places);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
  })

http.createServer(app).listen(3000);

module.exports = app;
