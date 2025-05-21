const jwt = require("jsonwebtoken")
const user_model = require("../models/user-model")

module.exports = async (req, res, next)=>{
    if(!req.cookies.token){
        res.redirect("/ez-coomerce/login");
        console.log("no token")
    }
    else{
        try {
            let decoded = jwt.verify(req.cookies.token ,"secret")
            let user = await user_model.findOne({email : decoded.email}).select("-password")
            req.user = user
            next()
        } catch (err) {
            console.log("something went wrong")
             res.redirect("/ez-coomerce/login");
        }
    }
}
