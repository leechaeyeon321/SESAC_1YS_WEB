const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use("/static", express.static("static"));

app.get('/img', (req, res) => {
    res.render( "prac", {          
        title: "prac 페이지 입니다.",
        data: ["1", "2", "3"]
    });
}); 
app.listen(port, ()=> {
    console.log("server open: ", port);
})