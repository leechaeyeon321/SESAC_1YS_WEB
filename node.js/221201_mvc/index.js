const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require("./routes"); 
//상대주소, 폴더까지 쓰면 그 안에 있는 index.js를 찾는다. 만약 index.js가 아닌 건 파일 이름까지 써야 한다.
//const router = require("./routes/index.js");

//localhost: 8080
//localhost: 8080/alsfajsdlkk
app.use('/', router);

app.get('*', (req, res) => {
    //내가 정의해둔 router가 아닌 다른 router로 접속했다면 이런 router는 없다고 알려줄 수 있는 코드.
    //모든 router를 정의해둔 후 제일 마지막에 써야한다.
    //정의되지 않은 라우터에 대해서는 handling 가능.
    //res.render('error');
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.")
})

app.listen(port, () => {
    console.log("server open: ", port);
})