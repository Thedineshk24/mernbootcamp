var express = require("express");
var router = express.Router();
const { check } = require('express-validator');
const { signout, signup , signin , isSignedIn } = require("../controllers/auth");

router.post("/signup",[
    check("name").isLength({min:3}).withMessage('name must be at least 3 chars long'),
    check("email").isEmail().withMessage("email is required or INVALID EMAIL"),
    check("password").isLength({min:3}).withMessage("password must be at least 3 chars long"),
    check("password").isLength({max:15}).withMessage("password should not be longer than 15 chars"),
], signup);

router.post("/signin",[
    check("email").isEmail().withMessage("email is required"),
    check("password").isLength({min:1}).withMessage("password field is required"),
],signin);

router.get("/signout", signout);

// router.get("/testroute", isSignedIn , (req,res) => {
//     //res.send("A Protected Route...");
//     res.json(req.auth);
// });

module.exports = router;
