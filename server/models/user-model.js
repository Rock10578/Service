const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified("password")){
        next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
    } catch (error) {
        next(error)
    }
})

userSchema.methods.generateToken = function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        }, process.env.JWT_SECRET, {expiresIn: "30d"})
    } catch (error) {
        console.error(error);
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User;