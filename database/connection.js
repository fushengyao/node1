var mysql = require("mysql");
var async = require("async");
//mysql连接池
var mysqlConnectionPool = mysql.createPool({
    host: '120.27.211.41',
    user: 'root',
    password: "",
    database: 'myWeb',
    port: "3306",
    multipleStatements: true  //开启多sql
})

var query = (sql,params, callback) => {
    async.waterfall([
        (cb) => {
            mysqlConnectionPool.getConnection((err, connection)=>{
                if (err) {
                    callback(err, null);
                }
                cb(err, connection)
            })
        },
        (connection, cb) => {
            connection.beginTransaction((err) => {
                if (err) {
                    callback(err, null)
                }
                cb(err, connection)
            })
        },
        (connection, cb) => {
            connection.query(sql, params, (err, results) => {
                if (err) {
                    connection.rollback(()=> {
                        callback(err, null);
                        console.log("事务执行失败, error" + err);
                        throw err;
                    })
                } else {
                    callback(null, results)
                    return;
                }
                cb(err, null)
            })
        }
    ], (err, results)=>{
        console.log(err);
        console.log(results);
    });
    // mysqlConnectionPool.getConnection((err, connection) => {
    //     if (err) {
    //         callback(err, null);
    //         return;
    //     }
    //     //开启事务
    //     connection.beginTransaction((err)=> {
    //         if (err) {
    //             callback(err, null);
    //             return;
    //         }
    //         //开始执行sql
    //         connection.query(sql, params, (err, results) => {
    //             if (err) {
    //                 connection.rollback(()=> {
    //                     console.log("事务执行失败, error" + err);
    //                     throw err;
    //                 })
    //             } else {
    //                 callback(null, results)
    //                 return;
    //             }
    //         })
    //     })
    // })
}

module.exports = query