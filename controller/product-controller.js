const asynchandler = require("express-async-handler")
const product_model = require("../models/product-model")


const rander= asynchandler( async(req,res) =>{
    let id = req.params.id
    let product = await product_model.findOne({_id : id})
    
    res.render("product.ejs", { product})
})

module.exports = { rander };