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

exports.delete = (req, res) => {
    // mysql req.body.id에 해당하는 데이터를 delete해야 한다.
    // 서버 응답 res.send를 해야한다.
    Visitor.delete_visitor(req.body.id, function(){
        res.send(true);
        //res.send("삭제 성공") 이런 식으로 보내도 됨.
        // 마땅히 보낼 것이 없다고 하더라도 무조건 응답을 보내야한다.
    })
}

exports.get_visitor_by_id = (req, res) => {
    //req.query.id에 해당하는 데이터를 조회
    //서버 응답 > 조회한 데이터
    Visitor.get_visitor_by_id_model(req.query.id, function(rows){
        res.send(rows);
    });
}

exports.update_visitor = (req, res) => {
    // req.body로 받아온 데이터를 mysql에 업데이트를 할 수 있도록 해야 함.
    // 서버의 응답 =>  

    Visitor.update_visitor(req.body, function(){
        res.send(true);
    })
}