const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.get("/", function (req, res) {
    res.render("axiosprac1");
});

app.get("/form", function(req, res){
    console.log(req.query);
    res.send({msg: "이름은: " + req.query.name + " 성별은: " + req.query.gender + " 생년월일은: " + req.query.birthYear + "년" + req.query.birthMonth + "월" + req.query.birthDay})
})
app.get("/ajax", function(req, res){
    console.log(req.query); //get 방식은 query라고 몇번 말하니..?
    res.send({msg: "이름은: " + req.query.name + " 성별은: " + req.query.gender + " 생년월일은: " + req.query.birthYear + "년" + req.query.birthMonth + "월" + req.query.birthDay + "일"})
})
app.post("/fetch", function(req, res){
    console.log(req.body);
    res.send({msg: "이름은: " + req.body.name + " 성별은: " + req.body.gender + " 생년월일은: " + req.body.birthYear + "년" + req.body.birthMonth + "월" + req.body.birthDay})
})
app.listen(port, ()=> {
    console.log("server open: ", port);
})