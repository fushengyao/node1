var express = require('express');
var router = express.Router();
var query = require("../database/connection.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
    query("select u.host, u.user, u.password from user u", (err, results,)=>{
        res.send(results);
    })

});

module.exports = router;
