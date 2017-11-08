// node 后端服务器

const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var proxy = require('http-proxy-middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api/user', userApi,proxy({target: 'http://127.0.0.1:3030/api/', changeOrigin: true}));

// 监听端口
app.listen(3030);
console.log('success listen at port:3030......');
