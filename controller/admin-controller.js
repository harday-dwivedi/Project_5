const asynchandler = require("express-async-handler");
// const upload = require("../config/multer-config")
// const product_model = require("../models/product-model")

const rander = asynchandler(async (req, res) => {
  res.send("work in progress,did not created admin page")
});

// const getProduct = asynchandler(upload.single("image") ,asyc (req, res)=>{
//   let product = await product_model.create({
//     Image : req.body
//   })
// })

module.exports = {rander}