const express = require("express");
const app = express(); 
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.use("/static", express.static("static"));

app.get("/prac_post", (req, res) => {
    res.render("prac_post")
})

app.post("/postForm", (req,res) => {
    console.log(req.body);
    res.render("result", {data: req.body});
})

app.listen(port, ()=> {
    console.log("server open: ", port);
})