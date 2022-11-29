const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8080;

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Mghgh5483!!',
    database: 'SESAC_TEST'
})

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    cnn.query("select * from user", (err, result) => {
        if (err) throw err;

        console.log(result);
        res.render("index", { rows: result });
    })
})
/* 
app.get("/login", function(req, res){
    cnn.query("select * from user", (err, result) => {
        if (err) throw err;

        console.log(result);
        res.render("index", { rows: result });
    })
    console.log(req.query);
    res.send({msg: "이름은: " + req.query.name + " 성별은: " + req.query.gender + " 생년월일은: " + req.query.birthYear + "년" + req.query.birthMonth + "월" + req.query.birthDay})
})
 */

app.get("/login", function(req, res){
    //res.render("result")
    console.log(req.query)
    //insert into user(id, pw) values(req.body.id, req.body.pw, )
})



app.listen(port, () => {
    console.log("Open", port);
})