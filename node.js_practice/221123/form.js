const express = require("express");
const app = express(); 
const port = 8080;
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
app.use("/static", express.static("static"));

app.get("/form", (req, res) => {
    res.render("form");
})
app.get("/getForm", (req,res) => {
    console.log(req.query); 
    res.send("get 요청 성공!");
})

app.post("/postForm", (req,res) => {
    console.log(req.body);
    res.send("post 요청 성공!");
    res.render("result", {data: req.body});
})
app.listen(port, () => {
    console.log("server open: ", port);
})