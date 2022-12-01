const Prac = require("../model/Prac");

exports.main = (req, res) => {
    res.render("prac")
};
/* 
exports.login = (req, res) => {
    let hi = Prac.hello();
    if(req.body.id == hi.id && req.body.pw == hi.pw){
        res.send("<p style = 'color: blue;'>로그인에 성공했습니다</p>")
    }else{
        res.send("<p style = 'color: red;'>로그인에 실패했습니다</p>")
    }
} */

exports.login = (req, res) => {
    let hoo = Prac.hello();
    if(req.body.id == hoo.id && req.body.pw == hoo.pw){
        res.send(hoo.name + "님 <p style = 'color: blue;'>로그인에 성공했습니다</p>")
    } else {
        res.send("<p style = 'color: red;'>아이디 또는 비밀번호를 잘못 입력했습니다</p>")
    }
};