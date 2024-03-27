const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = async (req,res,next) => {
    const token = req.header('Authorization');
    console.log("auth-middleware - token :",token);

    if (!token) {
        return res
                .status(401)
                .json({message:"Unauthorized HTTP, Token not provided"});
    }
    const jwtToken = token.replace("Bearer", "").trim()
    // console.log('token from auth middleware', jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET)
        const userData = await User.findOne({email:isVerified.email}).select({
            password: 0,
        });
        if (userData.isAdmin === false){
            res.status(400).json({msg: "You are not permitted to view database"})
            next()
        }
        // console.log("Auth Middleware userdata: ",userData);

        req.user = userData;
        req.token = token;
        req.userId = userData._id;

    } catch (error) {
        return res.status(401).json({message: "Unauthorized. Invalid token"});
    }
    next();
}

module.exports = authMiddleware;