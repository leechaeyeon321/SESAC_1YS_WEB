const Test = require("../model/Test");

// 경로와 연결될 함수 내용을 정의한다.
// 경로와 연결되는 함수이기에 
// 여러개를 exports하는 방법.
exports.main = (req, res) => {
    let hi = Test.hello(); 
    // 함수 호출했다는 것은 Test.js에 있는 함수에서 "hello"라는 문자열이 hi에 담긴다.
    res.send(hi)
    //res.render("index");
};

exports.test = (req, res) => {
    res.send("test");
};

exports.post = (req, res) => {
    res.send("post");
};

// 하나를 exports 하는 방법.
/* module.exports {
    main: main,
    test: test,
    post: post
} */ //딕셔너리 형태로 하나로 받아서 준다.