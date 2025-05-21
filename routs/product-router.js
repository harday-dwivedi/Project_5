const express = require("express");
const { rander } = require("../controller/product-controller");
const router = express.Router();
const upload = require("../config/multer-config")
const islogin = require("../middleware/islogin")   

router.route("/:id").get(islogin,rander);



module.exports = router;
