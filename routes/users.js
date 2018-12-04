var express = require('express');
var router = express.Router();
var query = require("../database/connection.js");
router.use(function (req, res, next) {
    console.log('Timeuser:', Date.now());
    next();
})
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(111, 222);
    // query("select u.host, u.user, u.password from user u", (err, results,)=>{
    //     res.send(results);
    // })

   // res.status(500).send({error:'Something blew up!'});
res.send({a: 111})
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    console.log(req.params);
    // query("select u.host, u.user, u.password from user u", (err, results,)=>{
    //     res.send(results);
    // })

    // res.status(500).send({error:'Something blew up!'});
    res.send({a: 111})
});

module.exports = router;
