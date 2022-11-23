const express = require("express");
const app = express(); 
const port = 8080;
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.use("/static", express.static("static"));

app.get("/g", (req, res) => {
    res.render("prac_g");
})
app.get("/getForm", (req,res) => {
    console.log(req.query); 
    res.send("get 요청 성공!");
})

app.listen(port, () => {
    console.log("server open: ", port);
})