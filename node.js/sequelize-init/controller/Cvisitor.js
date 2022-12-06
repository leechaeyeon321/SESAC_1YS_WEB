// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model"); //index.js에 접근할거라 폴더까지만 접근


exports.visitor = async (req, res) => {
    let result = await Visitor.findAll({
        attributes: [ "id", "name", "comment" ],
        order: [["id", "DESC" ]],
        // limit: 1
    });
    res.render("visitor", {data: result});
    // Visitor.findAll()가 실행될 때까지 기다린다.
    // 그 다음 결과를 result에 담고 그 다음에 다음 줄을 실행시킨다.
    //await 함수는 무조건 async가 있는 함수에서 사용 가능하다.
    // async await 함수에서는 then을 실행시킬 수 없다.

    // .then((result)=> {
    //     console.log(result);
    //     console.log("id: ", result[0].id);
    //     res.render("visitor", {data: result});
    // })

    // Visitor.findAll()
    // .then((result)=> {
    //     console.log(result);
    //     console.log("id: ", result[0].id);
    //     res.render("visitor", {data: result});
    // })

    // select * from visitor;

    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

exports.register = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.create(data)
    console.log(result);
    res.send(String(result.id));
    
    //promise활용한 방법
    // Visitor.create(data)
    // .then((result) => {
    //     console.log(result);
    //     res.send(String(result.id));
    // })
    //`insert into visitor (name, comment) values('${req.body.name}', '${req.body.comment}')`;
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })
}

exports.delete = async (req, res) => {
    let result = await Visitor.destroy({
        where: { id : req.body.id }
    })
    console.log(result); // 1인지 0인지 알려준다.
    res.send(true);

    //promise 활용한 방법
    // Visitor.destroy({
    //     where: { id : req.body.id }
    // }).then((result)=>{
    //     console.log(result); // 1인지 0인지 알려준다.
    //     res.send(true); 
    // })

    // delete from visitor where id = ${req.body.id}
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}

exports.get_visitor_by_id = async (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    // Visitor.findAll({
    //     where : { id: req.query.id },
    //     limit: 1
    // })
    // await를 이용한 방법
    // let result = await Visitor.findOne({
    //     where : { id: req.query.id }
    // }) //limit이 이미 내장되어 있는 함수
    // res.send(result);
    /* .then((result) => {
        res.send(result);
    }) */
    
    // promise를 활용한 방법
    // Visitor.findOne({
    //     where : { id: req.query.id }
    // }).then((result) => {
    //     res.send(result);
    // })

    // select id, name, comment from visitor
    // select id, name, comment from visitor order by id ASC/DESC limit 1
    Visitor.findAll({
        attributes: [ "id", "name", "comment" ],
        order: [["id", "DESC" ]],
        where : { id: req.query.id },
        limit: 1
    }).then((result) => {
        res.send(result[0]);
    })


    // select * from visitor where id = req.query.id;
    
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.update(data, {
        where: {id: req.body.id}
    })
    console.log(result);
    res.send(true);

    // promise를 활용한 방법
    // Visitor.update(data, {
    //     where: {id: req.body.id}
    // }).then((result) => {
    //     console.log(result);
    //     res.send(true);
    // })

    // update visitor set name = '${req.body.name}', comment='${req.body.comment}' where id = ${req.body.id}
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답 
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}