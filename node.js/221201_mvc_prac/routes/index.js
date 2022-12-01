const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/login", controller.login); //http 요청에 맞는 걸로 하면 됨. (get, post)
//요청 방법이 다르면 url이 똑같아도 됨.
router.post("/login", controller.loginPost);

router.post("/login2", controller.loginPost2);

module.exports = router;