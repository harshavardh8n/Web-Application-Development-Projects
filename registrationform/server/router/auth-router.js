const express = require("express");
const router = express.Router();
const {Home,register,login} = require("../controllers/auth-controllers")


router.route("/").get(Home);

router.route("/register").get(register);

router.route("/register").post(register);

router.route("/login").get(login);
router.route("/login").post(login);
router.route("/Contact").get((req,res)=>{
    res.status(200).send("Welcome to contact page")
});

module.exports = router;