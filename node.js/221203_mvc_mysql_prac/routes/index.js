const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.login);

router.get("/login", controller.signup);
router.post("/login", controller.loginPost);

router.get("/register", controller.register);
router.post("/registered", controller.registered);

router.post("/edit", controller.editView);
router.patch("/edit", controller.edit);
router.delete("/delete", controller.delete);

module.exports = router;