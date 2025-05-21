const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/Data");
        console.log("created")
    } catch (error) {
        process.exit(1);
    }
}

module.exports = connectdb;