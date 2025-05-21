const mongoose = require("mongoose")

const product_schema = mongoose.Schema({
    image : Buffer,
    name : String,
    price : String
})

module.exports = mongoose.model("product",product_schema)