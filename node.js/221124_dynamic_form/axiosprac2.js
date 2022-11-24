const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.get("/", function (req, res) {
    res.render("axiosprac2");
});

app.post("/login", function(req, res){
    console.log(req.body);
    if(req.body.id == "123" && req.body.pw == "123"){
        res.send("<p style = 'color: blue;'>로그인에 성공했습니다</p>")
    }else{
        res.send("<p style = 'color: red;'>로그인에 실패했습니다</p>")
    }
})

app.post("/ajax", function(req, res){
    console.log(req.body);
    if(req.body.id == "123" && req.body.pw == "123"){
        res.send({msg: "<p style = 'color: blue;'>로그인에 성공했습니다</p>"})
    }else{
        res.send({msg: "<p style = 'color: red;'>로그인에 실패했습니다</p>"})
    }
})
app.get("/ajax.get", function(req, res){
    console.log(req.query);
    if(req.query.id == "123" && req.query.pw == "123"){
        res.send({msg: "<p style = 'color: blue;'>로그인에 성공했습니다</p>"})
    }else{
        res.send({msg: "<p style = 'color: red;'>로그인에 실패했습니다</p>"})
    }
})
app.post("/fetch", function(req, res){
    console.log(req.body);
    if(req.body.id == "123" && req.body.pw == "123"){
        res.send({msg: "<p style = 'color: blue;'>로그인에 성공했습니다</p>"})
    }else{
        res.send({msg: "<p style = 'color: red;'>로그인에 실패했습니다</p>"})
    }
})
app.get("/fetch.get", function(req, res){
    console.log(req.query);
    if(req.query.id == "123" && req.query.pw == "123"){
        res.send({msg: "<p style = 'color: blue;'>로그인에 성공했습니다</p>"})
    }else{
        res.send({msg: "<p style = 'color: red;'>로그인에 실패했습니다</p>"})
    }
})
app.listen(port, ()=> {
    console.log("server open: ", port);
})