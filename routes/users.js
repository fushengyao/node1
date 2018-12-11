var express = require('express');
var router = express.Router();
var query = require("../database/connection.js");
router.use(function (req, res, next) {
    console.log('Timeuser:', Date.now());
    next();
})
/* GET users listing. */
router.get('/', function(req, res, next) {

});

router.post('/login', function(req, res, next) {
    var user = req.body.user;
    query("select * from users where username = ? and password = ?",[user.username, user.password], (err, results)=>{
        var flag = true;
        var msg = "查询成功"
        if (err) {
            flag = false;
            msg = "查询失败，请稍后重试";
            console.log("查询失败，请稍后重试");
            return
        }
        res.send({flag: flag, results: results, msg: msg});
    })
});

module.exports = router;
