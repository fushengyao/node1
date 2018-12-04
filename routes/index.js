var express = require('express');
var router = express.Router();
/* GET home page. */
var query = require("../database/connection.js");
var session = require("session");

query("select * from user", function (err, results) {
    //console.log(results.length);
})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
