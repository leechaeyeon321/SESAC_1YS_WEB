const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

//세션 사용 미들웨어 등록
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(session({
    secret: '1234', // 여기서 정한 임의의 문자열을 기준으로 세션을 암호화함.
    resave: false, // 변경 사항이 없어도 다시 저장 여부 true: 모든 요청마다 session에 변화가 없어도, session을 다시 저장함. //대부분 false사용
    saveUninitialized: true,//초기화되지 않은 session을 저장하냐 마냐 보통 true로 사용
    // cookie: { //session id 쿠키에 대한 옵션
    //     httpOnly: true,
    //     maxAge: 
    // },
    // secure: //보안 서버에서만 작동하냐 안하냐 true: 보안 서버에서만 작동
}))


/* app.get("/", (req,res) => {
    if(req.session.user){res.render("main", {isLogin: true})} //다른 페이지로 넘어간다.
    else{res.render("main", {isLogin: false})} //다시 로그인 화면을 보여준다.
    res.send("세션 수업")
}) */

const user = {id: "abc", pw: 1234}


app.get("/main", (req,res) => {
    res.render("main", {id: req.session.user})
})

app.get("/login", (req,res) => {
    // if(req.session.user) res.render("login", {isLogin: true, id: req.session.user})
    // else{res.render("login", {isLogin: false})}
    res.render("login")
})

app.post("/login", (req,res) => {
    // cookie = {  }
    // req.session = {  }
    if(req.body.id == user.id && req.body.pw == user.pw){
        req.session.user = req.body.id; //req.session.id만 안하면 됨.
        console.log(req.session)
        res.send(true);
    } else {
        res.send(false);
    }
    // req.session.user = "id";
    //res.send("세션 생성 성공")
})

app.delete("/logout", (req, res) => {
    req.session.destroy(function(err){
        if (err) throw err;
        console.log(req.session)
        res.send(true)

    })
})
app.listen(port, ()=>{
    console.log("server open", port);
});