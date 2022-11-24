
const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{ 
    res.send("hello express!");
})

app.get("/form", (req, res) => {
    res.render("formvalidation")
})

app.post("/postForm", (req,res) => {
    console.log(req.body);
})

app.listen(port, ()=> {
    console.log("server open: ", port);
})
