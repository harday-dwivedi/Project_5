const asynchandler = require("express-async-handler")


const rander= asynchandler( async(req,res) =>{
    res.render("checkout.ejs")
})

module.exports = { rander };