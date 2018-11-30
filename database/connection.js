var mysql = require("mysql");
//mysql连接池
var mysqlConnectionPool = mysql.createPool({
    host: '120.27.211.41',
    user: 'root',
    password: "",
    database: 'mysql',
    port: "3306",
    multipleStatements: true  //开启多sql
})

var query = function(sql, cb) {
    mysqlConnectionPool.getConnection(function (err,connection) {
        if (err) {
            cb(err, null)
        } else {
            connection.query(sql, function (qerr, vals) {
                //释放连接
                connection.release();
                //事件驱动回调
                cb(qerr, vals)
            })
        }
    })
}

module.exports = query