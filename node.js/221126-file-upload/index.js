const express = require("express");
const multer = require('multer');
const path = require('path')
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

/* const upload = multer({
    dest: "uploads/"
})
 */
const upload = multer({
    storage: multer.diskStorage({  // storage 저장할 공간에 대한 세부적인 설정
        destination(req, file, done){
            done(null, "uploads/");
        },
        filename(req, file, done){ //저장할 파일의 이름 설정
            console.log("file name: ", req.body)
            const ext = path.extname(file.originalname); //banana.jpg
            //const filename = Date.now() + ext; //123123123123.jpg
            const filename = req.body.name + ext;
            done(null, filename);
        }
    })
})
app.get("/file", (req, res)=> {
    res.render("file")
})

app.post("/upload", upload.single("userfile"), (req, res) => {//input name = "userfile" input태그의 name 속성이다.
    //upload.single에서 single이라는 속성은 하나의 파일만 보내면 single
    console.log(req.file); 
    console.log(req.body);
    res.send("Upload Complete");
})
app.post("/upload-array", upload.array("userfile"), (req, res) => {//input name = "userfile" input태그의 name 속성이다.
    
    console.log(req.files); 
    console.log(req.body);
    res.send("Upload Complete");
})
app.post("/upload-fields", upload.fields([{name: "userfile1"}, {name: "userfile2"}, {name: "userfile3"}]), (req, res) => {//input name = "userfile" input태그의 name 속성이다.
    
    console.log(req.files); 
    console.log(req.body);
    res.send("Upload Complete");
})

app.get("/", test, test2, (req, res) => {
    console.log("req.name: ", req.name)
    console.log("Hello");
    res.send("Hello");
});
// "/" 이 url로 가서 req res 함수가 실행이 될 건데, test test2를 거쳐갈거다.

function test(req, res, next) { //next를 써두지 않으면 그 다음 동작이 실행되지 않는다.
    req.name = "12345";
    console.log(req.query);
    console.log("test 함수입니다.");
    next(); //test 미들웨어 함수가 끝났고, 그 다음을 진행해라.
}

function test2(req, res, next) {
    console.log("test 함수입니다.");
    next();
}

app.listen(port, () => {
    console.log("Server Port: ", port);
})