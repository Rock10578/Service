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
        const userCreated = await User.create({username, password, email, phone})
        res.status(201).json({msg: "Registration Successfull", token: await userCreated.generateToken(), userId: userCreated._id.toString()})
    } catch (error) {
        // res.status(400).send({msg: "Page not found"})
        next(error);
    }
}

const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email: email})
        if (!userExist) {
            return res.status(400).json({msg: "Invalid Credentials"})
        }
        const user = await bcrypt.compare(password, userExist.password)
        if (user){
            res.status(200).json({
                msg: "Login Successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        }else{
            res.status(401).json({
                msg: "Invalid Email or password"
            })
        }
    } catch (error) {
        res.status(500).send({msg: "Internal Server Error"})
    }
}

module.exports = {home,register,login}