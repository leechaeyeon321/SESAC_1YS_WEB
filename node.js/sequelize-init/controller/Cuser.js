// const User = require("../model/User");
const {User} = require("../model");

exports.index = async (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = async (req,res) => {
    let data = {
        id: req.body.id,
        name: req.body.name,
        pw: req.body.pw
    }
    let result = await User.create(data)
    res.send(result);
    // User.post_signup(req.body, function(){
    //     res.send(true);
    // });
    //INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');
}

exports.signin = (req,res) => {
    res.render("signin");
}

//SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1
exports.post_signin = async (req,res) => {
    let data = {
        id: req.body.id,
        pw: req.body.pw
    }
    let result = await User.findAll({
        where: {id: data.id, pw: data.pw},
        limit: 1
    });
    if ( result.length > 0 ) res.send(true);
    else res.send(false);
}

exports.profile = async (req,res) => {
    let result = await User.findOne({
        where: {id: req.body.id}
    })
    console.log(result);
    if ( result ) res.render("profile", {data: result});
    else res.redirect("/user/signin");
}

//UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
exports.profile_edit = async (req,res) => {
    let data = {
        where: {id: req.body.id, pw: req.body.pw}
    }
    let result = await User.update(data, {
        where: {name: req.body.pw}
    })
    console.log(result)
    res.send(true)
}

exports.profile_delete = async (req,res) => {
    let result = await User.destroy({
        where: {id: req.body.id}
    })
    console.log(result)
    res.send(true);
}