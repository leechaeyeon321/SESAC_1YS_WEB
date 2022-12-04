const User = require("../model/User")

exports.login = (req, res) => {
    res.render("home");
}

exports.loginPost = (req, res) => {
    User.loginPost(req.body.id, req.body.pw, function(result){
        if ( result.length > 0 ) res.send(true);
        else res.send(false);
    });
}

exports.register = (req, res) => {
    User.register_login(req.body, function(result){
        res.render("register");
    })
}

exports.registered = (req, res) => {
    User.registered(req.body.id, req.body.pw, function(result){
        if( result.length > 0) res.send(true);
        else res.send(false);
    })
}
exports.editView = (req, res) => {
    User.editView_login(req.body, function(result){
        res.render("update", {data: result})
    })
}
exports.edit = (req, res) => {
    User.edit_login(req.body.id, function(result){
        res.send(result);
        // res.render("update", {data: result})
    })
}
exports.delete = (req, res) => {
    User.delete_login(req.body.id, function(result){
        res.send(result);
    })
}