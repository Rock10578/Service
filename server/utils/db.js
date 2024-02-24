const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connection to DB Successful")
    } catch (error) {
        console.error("Connection to DB Failed")
        process.exit(0)
    }
}

module.exports = connectDB;