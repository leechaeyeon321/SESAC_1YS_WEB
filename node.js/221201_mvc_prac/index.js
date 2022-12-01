const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require("./routes"); 

app.use('/', router);
//미들웨어 등록(클라이언트가 요청했을 때 서버로 가기 전에 거쳐가는 곳)

app.get('*', (req, res) => {
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.")
})

app.listen(port, () => {
    console.log("server open: ", port);
})