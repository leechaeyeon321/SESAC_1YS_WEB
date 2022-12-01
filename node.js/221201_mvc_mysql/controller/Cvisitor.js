const Visitor = require("../model/Visitor");

exports.visitor = (req, res) => {
    Visitor.get_visitor(function(result){

        console.log(result);
        
        res.render("visitor", {data: result}); //visitor.ejs에 넘겨주고 싶은 데이터로 넘겨주고 있다.
    })
} 

exports.register = (req, res) => {
    Visitor.register_visitor(req.body, function(id){
        console.log(id);
        res.send(String(id)); //숫자는 이렇게 보내야 한다.
    })
    // insert req.body
    // 
}