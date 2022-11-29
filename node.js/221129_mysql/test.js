const mysql = require("mysql");

const cnn = mysql.createConnection({ //option 객체는 중괄호 안에 들어간다.
    host: 'localhost', // '127.0.0.1' 둘 중 하나 적어주면 됨.
    user: 'user', //최고 권위 사용자
    password: 'Mghgh5483!!', //mysql 비밀번호
    database: 'SESAC_TEST' //만든 폴더 이름
})

cnn.query("delete from user where ID = 'junkrat'", (err, result) => {
    //err = undefined; 형태로 존재 
    //err가 발생하지 않으면 err는 계속 undefined
    //err가 발생하면 err = {dfdsa} 객체가 들어간다.
    //if (err) console.log(err);
    if (err) throw err;

    cnn.query("select * from user", (err, result) => {
        console.log(result);
    })
    console.log(result);
})