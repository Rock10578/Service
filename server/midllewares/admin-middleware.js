const User = require('../models/user-model');

const adminMiddleware = async (req,res,next) => {
    try {
        const userData = await User.findOne({email: req.body.email})
        // console.log(userData);
    } catch (error) {
        console.log("Error from admin - middleware", error)
    }
    next();
}

module.exports = adminMiddleware