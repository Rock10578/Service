const User = require("../models/user-model")

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
        const userCreated = await User.create({username, password, email, phone})
        res.status(201).json({msg: "Registration Successfull", token: await userCreated.generateToken(), userId: userCreated._id.toString()})
    } catch (error) {
        res.status(400).send({msg: "Page not found"})
    }
}

module.exports = {home,register}