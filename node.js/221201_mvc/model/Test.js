exports.hello = function(){
    return "hello";
} //hello라는 함수를 만든 것. hello라는 함수는 "hello" 문자열을 리턴하고 있다.

exports.test = function(){
    return [
        {id: "a", name: "김소연"},
        {id: "b", name: "김소연"}
    ];
}