const User = require("../model/User")

exports.login = (req, res) => {
    res.render("login") //login ejs를 만들어 두었으니 login
}

exports.loginPost = (req, res) => {
    let info = User.user();
    if(req.body.id == info.id && req.body.pw == info.pw){
        res.send("<p style = 'color: blue;'>로그인 성공</p>")
    } else {
        res.send("<p style = 'color: red;'>로그인 실패</p>")
    }
}

var users = 
`spreatics//1234//스프레틱스
codee//4321//코디`

exports.loginPost2 = (req, res) => {
    let users = User.user2();
    let user_list = users.split("\n");
    //user_list = ["spreatics//1234//스프레틱스", "codee//4321//코디"]
    let login_flag = false;
    let name = "";
    for (let i = 0; i<user_list.length; i++){
        let user = user_list[i].split("//");
        //user = ["spreatics", "1234", "스프레틱스"]
        if(req.body.id == user[0] && req.body.pw == user[1]){
            login_flag = true;
            name = user[2];
            break;
        }
    }
    if(login_flag) res.send(`<p style = 'color: blue;'>${name}님 환영합니다.</p>`)
    else res.send(`<p style = 'color: red;'>로그인 실패</p>`)
}