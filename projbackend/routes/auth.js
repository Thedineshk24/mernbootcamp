var express = require("express");
var router = express.Router();
const { check } = require('express-validator');
const { signout, signup } = require("../controllers/auth");

router.post("/signup",[
    check("name").isLength({min:3}).withMessage('name must be at least 3 chars long'),
    check("email").isEmail().withMessage("email is required or INVALID EMAIL"),
    check("password").isLength({min:3}).withMessage("password must be at least 3 chars long"),
    check("password").isLength({max:15}).withMessage("password should not be longer than 15 chars"),
], signup);
router.get("/signout", signout);

module.exports = router;
