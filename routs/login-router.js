const express = require("express");
const { rander, sing_in , login} = require("../controller/login-controller");
const router = express.Router(); 

router.route("/").get(rander);
router.route("/sing-in").post(sing_in);
router.route("/login").post(login);
router.get("/logout",(req , res) =>{
    res.cookie("token", "");
    console.log("logout successful")
    res.redirect("/ez-coomerce/login")
})


module.exports = router;
