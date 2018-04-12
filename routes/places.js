const express = require('express');
const router = express.Router();
const config = require('../config.js');
const mysql      = require('mysql');

var DB = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

router.get("/:placeUrl/detail", function(req, res, next) {
  var placeUrl = req.params.placeUrl
  console.log(placeUrl)
  DB.query(`SELECT * FROM places LEFT JOIN place_adresses ON places.id = place_id WHERE url = "${ placeUrl }"`, function (error, results, fields) {

    if (error) throw error;
    res.send(results[0])    
  });
})

router.get("/extra-curr/:placeId", function(req, res, next) {
  var placeId = req.params.placeId
  DB.query(`SELECT * FROM extra_curricular WHERE place_id = "${ placeId }"`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)    
  });
})

router.get("/place-images/:placeId", function(req, res, next) {
  var placeId = req.params.placeId
  DB.query(`SELECT * FROM place_images WHERE place_id = "${ placeId }"`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)    
  });
})

router.get('/', function(req, res, next) {
 
  // GET/users/ route
  DB.query('SELECT * FROM places LEFT JOIN place_adresses ON places.id = place_id', function (error, results, fields) {
    if (error) throw error;
    res.send(results)    
  });

});



module.exports = router;
