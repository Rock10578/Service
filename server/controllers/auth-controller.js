const User = require("../models/user-model")
const bcrypt = require("bcryptjs")

const home = async (req,res) => {
    try {
        res
            .status(200)
            .send("Welcome to service page by Rock10578");
    } catch (error) {
        console.log(error)
    }
}

const register = async (req,res) => {
    try {
        const {username, password, email, phone} = req.body;
        const userExist = await User.findOne({email: email})
        if (userExist) {
            return res.status(400).json({msg: "Email already exists"})
        }
        const salt = 10
        const hashPassword = await bcrypt.hash(password, salt)

        const userCreated = await User.create({username, password: hashPassword, email, phone})
        res.status(200).json({msg: userCreated})
    } catch (error) {
        res.status(400).send({msg: "Page not found"})
    }
}

module.exports = {home,register}