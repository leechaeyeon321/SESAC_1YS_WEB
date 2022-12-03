const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Mghgh5483!!',
    database: 'SESAC_TEST'
})

exports.login = (info, cb) => {
    var sql = `select * from login where id = '${info.id}' and pw = '${info.pw}'`
    cnn.query(sql, (err, result) => {
        if(err) throw err;

        let flag = false;
        if(result.length > 0) flag = true;

        console.log("select result: ", result);
        cb(flag);
    })
}
exports.register_login = (info, cb)=> {
    var sql = `insert into login values('${info.id}', '${info.pw}', '${info.name} ')`
    cnn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("insert result: ", result);
        cb(result.insertId);
    })
}

exports.registered = (id, pw, cb) => {
    var sql = `select * from login where id = '${id}' and pw = '${pw}' limit 1`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}
exports.editView_login = (info, cb) => {
    var sql = `select * from login where id = '${info.id}'`
    cnn.query(sql, (err, result) => {
        if(err) throw err;
        cb(result[0]);

    })
}
exports.edit_login = (info, cb) => {
    var sql = `update login set name = '${info.name}' , pw = '${info.pw}' where id = '${info.id}'`;
    cnn.query(sql, (err, result) => {
        if(err) throw err;

        console.log("update result: ", result);
        cb(result[0]);
    })
}

exports.delete_login = (id, cb) => {
    cnn.query(`delete from login where id = '${id}'`, (err) => {
        if(err) throw err;
        cb();
    })
}