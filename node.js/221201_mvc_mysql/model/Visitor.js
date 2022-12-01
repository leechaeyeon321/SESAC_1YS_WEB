const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Mghgh5483!!',
    database: 'SESAC_TEST'
})

exports.get_visitor = (cb) => {
    var sql = 'SELECT * FROM visitor';

    cnn.query(sql, (err, rows) => { //rows에 결과가 담긴다.
        if(err) throw err;
        console.log("visitors: ", rows); //error가 생기지 않았을 경우.
        
        cb(rows);
    })
}
// cnn.query에서 처리하는데 오래걸린다. 
// mySQL 함수는 render하는데 시간이 오래걸리기 때문에 여기서 콜백 함수를 만들어준다.

exports.register_visitor = (info, cb) => {
    // info = req.body;가 있다. {name: , comment: }
    var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}')`
    //info.name = req.body.name
    cnn.query(sql, (err, result) => {
        if(err) throw err;

        console.log("insert result: ", result);
        cb(result.insertId);
    })
}