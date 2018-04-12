const express = require('express');
const router = express.Router();
const config = require('../config.js');
const DB = require('../DB.js');

router.get('/', function(req, res, next) {
 
  DB.connect()
  // GET/users/ route
  DB.query('SELECT * from places where type_id= 1', function (error, results, fields) {
    if (error) throw error;
    res.send(results)    

  });
  DB.end();

});

module.exports = router;
