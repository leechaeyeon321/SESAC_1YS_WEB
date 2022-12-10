const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
//body에 있는 값 가져올 때 해야 하는 두 줄!
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
}))

const user = {id: "abc", pw: 1234}


app.get("/", (req,res) => {
    // req.session이라는 공간 안에 user가 있는 지만 보면 됨
    console.log(req.session.user);
    if(req.session.user) res.render("index", {isLogin: true, id: req.session.user});
    else res.render("index", {isLogin: false});
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", (req, res) => {
    if(req.body.id == user.id && req.body.pw == user.pw){
        req.session.user = req.body.id;
        res.send(true);
    } else {
        res.send(false);
    }
})

app.get("/logout", (req, res) =>{
    req.session.destroy(function(err){
        if(err) throw err;

        res.redirect("/")
    })
})

app.listen(port, ()=>{
    console.log("server open", port);
});