// sql语句
var sqlMap = {
    // 用户
    userinfo: {
        add: 'insert into user(name, pass) values (?, ?)'
    }
}

module.exports = sqlMap;
