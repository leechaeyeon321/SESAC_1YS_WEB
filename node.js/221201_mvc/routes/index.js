var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

//어떤 라우터를 만들 것인지에 대한 부분.
router.get("/", controller.main);
router.get("/test", controller.test);

router.post("/postForm", controller.post);


//require 모듈로 불러와서 사용하고 싶다면 exports를 해줘야 함.
//exports할 게 router다.
//여기서 정의한 router가 최상위에 있는 index.js에 const router = require("./routes"); require 부분에 담긴다.
module.exports = router;
