const mysql = require("mysql");
//mysql을 연결하려면 model에 연결해야 함.

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
    var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}')`;
    //info.name = req.body.name
    //'${info.name}' 문자열이므로 양쪽에 작은따옴표 필요함.

    cnn.query(sql, (err, result) => {
        if(err) throw err;

        console.log("insert result: ", result);
        cb(result.insertId);
    })
}

exports.delete_visitor = (id , cb) => {
    var sql = `delete from visitor where id = ${id}`;

    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log("delete result: ", result);
        cb();
    })
}

exports.get_visitor_by_id_model = (id, cb) => {
    var sql = `select * from visitor where id = ${id}`;

    cnn.query(sql, (err, rows) => {
        if (err) throw err;

        console.log("select by id: ", rows);
        cb(rows[0]); // 어차피 id로 조회하는 거니까 배열의 인덱스에 접근하여 하나의 값만 가져온다.
    })
}

exports.update_visitor = (info, cb) => {
    var sql = `update visitor set name = '${info.name}' , comment = '${info.comment}' where id = '${info.id}'`;
    //info = req.body
    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log("update result: ", result);
        cb();
    })
}