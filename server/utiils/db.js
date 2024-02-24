const mongoose = require("mongoose")

const MONGO_URL = "mongodb+srv://Service:Service1234@cluster0.pcs96bn.mongodb.net/User"

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Connection to DB Successful")
    } catch (error) {
        console.log("Connection to DB Failed")
        process.exit(0)
    }
}

module.exports = connectDB;