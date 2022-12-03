const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

//localhost:8080/visitor~
router.get("/", controller.visitor);

//localhost:8080/visitor/register
router.post("/register", controller.register);

//localhost:8080/visitor/delete
router.delete("/delete", controller.delete);

router.get("/get_visitor", controller.get_visitor_by_id);

router.patch("/update", controller.update_visitor);

//router.post("/register", controller.test); 
//-> controller에 없는 함수 불러오면 오류가 뜬다.
//controller에서 만들고 나서 여기서 불러와야 함

module.exports = router;