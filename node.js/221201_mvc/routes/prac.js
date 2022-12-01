var express = require("express");
var controller = require("../controller/Cprac");
const router = express.Router();

router.get("/", controller.main);
router.post("/login", controller.login)

module.exports = router;