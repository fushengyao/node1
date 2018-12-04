var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//打印日志到控制台
app.use(logger('dev'));
//生产环境中，需要将日志记录在log文件里,这样便可以将请求信息打印在根目录下的access.log文件中（注意文件路径别填错，并不会自动创建该文件）
//app.use(logger('combined', {stream : accessLog}));
//表单数据解析
app.use(express.json()); //body-parser解析jnso格式,等于bodyParser.json()
app.use(express.urlencoded({ extended: false })); //body-parser解析文本格式,等于bodyParser.urlencoded({ extended: false })

//cookie解析
app.use(cookieParser());

//静态文件设置
app.use(express.static(path.join(__dirname, 'public')));

//路由设置
app.use('/index', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
