/* exports.hello = function(){
    return {id: "123", pw: "123"}
} */
var users = 
'spreatics\n12341234\n코딩온'

exports.hello = function(){
    return {id: users.split("\n")[0], pw: users.split("\n")[1], name: users.split("\n")[2]}
}