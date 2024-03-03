const {z} = require("zod");

const signupSchema = z.object({
    username: z
            .string({required_error: "Username is required"})
            .trim()
            .min(3,{message: "Username must be atleast of size 3"})
            .max(100,{message: "Username can't be more than 100 characters"}),
    email: z
            .string({required_error: "Email is required"})
            .trim()
            .email({message: "Invalid Email address"})
            .min(3,{message: "Email must be atleast of size 3"})
            .max(100,{message: "Email can't be more than 100 characters"}),
    phone: z
            .string({required_error: "Phone is required"})
            .trim()
            .min(7,{message: "Phone should be atleast of size 7"})
            .max(14,{message: "Phone no. can't be more than 14 characters"}),
    password: z
            .string({required_error: "Password is required"})
            .min(6,{message: "Password must be atleast of size 6"})
            .max(100,{message: "Password can't be more than 100 characters"}),
})

module.exports = signupSchema