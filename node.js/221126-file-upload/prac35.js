const express = require("express");
const multer = require('multer');
const path = require('path');

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use("/uploads", express.static("uploads"));

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, "uploads/");
        },
        filename(req, file, done){
            console.log("file name: ", req.body)
            const ext = path.extname(file.originalname);
            
            const filename = req.body.id + ext;
            done(null, filename);
        }
    })
})
app.get("/prac35", (req, res)=> {
    res.render("prac35")
})
app.post("/upload", upload.single("userfile"), (req, res) => {
    console.log("req.file: ", req.file); 
    console.log(req.body);
    res.render("result", {data: req.file.filename, body: req.body})
})

app.listen(port, () => {
    console.log("Server Port: ", port);
})