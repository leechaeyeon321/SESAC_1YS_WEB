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
            done(null, req.body.id + ext);
        }
    })
})
app.get("/prac36", (req, res)=> {
    res.render("prac36")
})
app.post("/login", upload.single("dynamic-userfile"), (req, res) => {
    console.log("req.file: ", req.file); 
    console.log("original file name: ", req.file.originalname)
    console.log(req.body);
    res.send({path: req.file.path})
})

app.listen(port, () => {
    console.log("Server Port: ", port);
})