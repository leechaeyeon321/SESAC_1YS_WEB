/* 
기본 코드
const express = require("express");
const app = express(); //객체 만들기
const port = 8080; // 8080, 8000, 3000 중 하나

app.listen(port, ()=> {
    console.log("server open: ", port); //열었을 때 콘솔로 확인하고 싶으면
})
 */
const express = require("express");
const app = express(); //객체 만들기
const port = 8080; // 8080, 8000, 3000 중 하나

app.set('view engine', 'ejs'); // 나는 view engine으로 ejs라는 템플릿을 쓰겠다.

//서버 측에서 파일에 접근할 수 있는 권한을 줘야 한다.
//app.use("/public", express.static("static"));
//static 이라는 실제 존재하는 폴더에 public 경로로 접근할 수 있도록 함.
//src="/public/img/cat.jpg"


//----------form 에 관한 내용-------------
app.use(express.urlencoded({extended: true})); // x-www-urlencoded 데이터 해석
app.use(express.json()); //json : 딕셔너리 형태와 비슷
// {
//     key: value
// }


//-------------------------------------------
// client가 static이라는 파일에 접근할 수 있도록 하는 권한을 주는 것.
//첫번째 인자는 가상 경로 두번째는 무조건 express.static이어야 한다.
//app.use("/가상경로", express.static("폴더 이름"));
app.use("/static", express.static("static"));

//app.use(express.static("static"));
//src = "/img/cat.jpg"

//----------------------------------------------------------------------------
//나는 이 주소로 들어갔을 때 이걸 보여줄거다.
//localhost:8080
app.get('/', (req, res)=>{ 
    // req: request (클라이언트가 서버에 보내는 요청)
    // res: respose의 약자(서버가 클라이언트에 보내는 응답)
    res.send("hello express!");
    //웹브라우저 들어갔을 때 보여지는 내용(서버가 클라이언트에게 send를 응답으로 보내겠다.)
})
//localhost:8080/test
app.get('/test', (req, res) => {
    res.sendFile(__dirname + "/views/index.html"); //절대 경로를 입력해야 한다.
})
// __dirname : c:/~~~~~~~/node.js/221122_express

//라우터 하나 더 만들겠다.
//localhost:8080/ejs
app.get('/ejs', (req, res) => {
    res.render( "index", {          // view engine으로 설정해두었기 때문에 확장자를 쓰지 않아도 된다.
        title: "Index 페이지 입니다.", // 키가 index.ejs에서 변수로 활용된다.
        data: ["a", "b", "c"]
    });
}); 
//만약 파일을 분리해놓았다면 "test/test"이런 식으로 render() 괄호 안에




//----------form 에 관한 내용-------------
//get요청
app.get("/form", (req, res) => {
    res.render("form")
})

app.get("/getForm", (req,res) => { //form.ejs의 form action="/getForm"
    console.log(req.query); 
    //req.query 클라이언트가 서버 측에 보내는 요청 중 query
    //query는 url 중 물음표 뒤 부분을 말함.
    //딕셔너리 형태로 콘솔에 찍히고 있음. 
    res.send("get 요청 성공!");
})

//post 요청
/* app.post("/postForm", (req,res) => {
    console.log(req.body);//body에 정보를 담아온다.
    res.send("post 요청 성공!");
}) */
//post요청으로 라우터를 선언해 놓았을 때에는 url로 들어갈 수가 없다.
app.post("/postForm", (req,res) => {
    console.log(req.body);
    res.render("result", {data: req.body});
})


//서버를 여는 코드는 맨 뒤에 있어야 함.
app.listen(port, ()=> {
    console.log("server open: ", port); //열었을 때 콘솔로 확인하고 싶으면
})
//백앤드 측 언어는 수정했으면 node를 껐다가 켜야 하는데 프론트 앤드 측 언어만 수정했으면 node를 껐다 켜지 않고 새로고침만 하면 된다.
