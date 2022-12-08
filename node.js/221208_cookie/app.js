const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.use(cookieParser()); // cookieParser라는 것을 사용하겠다고 미들웨어 등록
app.set('view engine', 'ejs');

const option = {
    httpOnly: true, //test라는 쿠키에 대해서 document.cookies가 보이지 않는다. true로 해두면 자바스크립트에서 쿠키 자체에 접근하는 것을 막아준다. 클라이언트가 document.cookie로 접근할 수 없게 함.
    maxAge: 86400000 , // 만들어진 순간부터 설정한 초만큼 뒤에 만료가 된다. (밀리 세컨드(ms) 단위) ex) 30000 -> 30초 뒤 만료
    //expires: "2022-12-09T09:00:00" ,//GMT 시간 사용 2022-12-09T09:00:00
    //path: "/visitor", //localost:8000 쿠키가 없음. localhost:8000/visitor/~~~~이 경로의 쿠키가 있음. default "/"
    //secure: false, //true or false(false가 기본값.) true라고 할 경우 https -> 보안서버에만 적용됨.
    //signed: true //쿠키의 암호화 하고 싶으면: true. default: false 
}

app.get("/",(req, res) => {
    /* if (req.cookies.NM_POPUP) res.render("index", {popup: "none"});
    else { res.render("index", {popup: "display"})} */
    //req.cookies.popup 값을 비교해야 함.
    if (req.cookies.popup == "1") res.render("index", {popup: "none"});
    // else { res.render("index", {popup: "display"})};
    else { res.render("index", {popup: "block"})};
})

app.post("/setpopup", (req, res) => {
    //1. 쿠키를 만든다. 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키 생성 res cookie는 서버 응답의 header를 바꿈.
    // {popup : 1}
    res.cookie("popup", "1", option);
    //2. 실질적인 서버의 응답이 있어야 한다.
    res.send(true);
})


app.get("/set", (req, res) => {//res: 서버가 클라이언트에게 보내는 객체
    // res.cookie("key", "value", 옵션객체); //옵션객체는 쿠키의 만료일 등을 설정 가능
    res.cookie("NM_POPUP", "1", option);
    res.send("쿠키 생성 성공");
});

app.get("/get", (req, res) => {
    console.log(req.cookies); // req는 클라이언트가 서버에게 보내는 객체이므로 req객체로 cookies확인 가능
    console.log(req.cookies.test);
    res.send(req.cookies);
});

app.listen(port, ()=>{
    console.log("server open", port);
});