const express = require("express");
const { rander } = require("../controller/admin-controller");
const upload = require("../config/multer-config")
const product_model = require("../models/product-model")
const router = express.Router();

router.route("/").get(rander);

router.post("/create",upload.single("image") ,async (req, res)=>{                 //createing product using postman
  try {
    let product = await product_model.create({
    image : req.file.buffer,
    name : req.body.name,
    price : req.body.price
  })
  console.log("product created")
  } catch (err) {
    res.send("something went wrong")
  }
})



module.exports = router;