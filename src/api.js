const express = require('express');
const mysql = require('mysql');
// const static = require('express-static');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database:'resume',
  port: 3306
});

var app = express();
// ====》设置了一个 /resume 的接口，并将从数据库获取的数据data，send到前台（接口名字随便取的）
app.use('/resume', (req, res)=>{
  db.query(`SELECT * FROM text_info`, (err, data)=>{
    "use strict";
    if(err){
      res.status(500).send('databases error').end();
    }else{
      res.send(data).end();
      console.log(res);
    }
  })

})

app.listen(8080);
// app.use(static('./static/'));
