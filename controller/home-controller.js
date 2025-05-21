const asynchandler = require("express-async-handler")
const product_model = require("../models/product-model")

  

const rander= asynchandler( async(req,res) =>{
    let products = await product_model.find()
    res.render("index.ejs", { products})
})

module.exports = { rander };