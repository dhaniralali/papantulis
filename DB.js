const mysql      = require('mysql');

var DB = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
});
console.log(process.env.DB_USERNAME)
module.exports=  DB