const express = require("express");
const { rander } = require("../controller/home-controller");
const router = express.Router();
const islogin = require("../middleware/islogin")    

router.route("/").get(islogin,rander)



module.exports = router;