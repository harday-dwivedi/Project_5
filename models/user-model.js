const mongoose = require("mongoose")

const user_schema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    cart : {
        type : Array,
        default : []
    },
    order : {
        type : Array,
        default : []
    },
    isadmin : Boolean,
     product : {
        type : Array,
        default : []
    },
    contact : Number,
    picture : String
})

module.exports = mongoose.model("user",user_schema)