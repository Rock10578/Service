require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const connectDB = require("./utils/db")
const errorMiddleware = require("./midllewares/error-middleware")

// MiddleWare
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware)

const PORT = 4000

connectDB().then(() => {    
    app.listen(PORT,() => {
        console.log(`Server running on http://localhost:${PORT}/api/auth`)
    })
})