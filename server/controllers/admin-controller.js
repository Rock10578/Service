const  User = require("../models/user-model");

const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({} , {password:0});
        console.log(users);
        if(!users ||  users.length === 0){
            return res.status(404).json({message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status("message : ",error);
    }
};

module.exports = getAllUsers