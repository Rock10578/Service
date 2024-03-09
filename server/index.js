require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const serviceRoute = require("./router/service-router");
const connectDB = require("./utils/db")
const errorMiddleware = require("./midllewares/error-middleware")

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}

app.use(cors(corsOptions))
// MiddleWare
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use(errorMiddleware)

const PORT = 4000

connectDB().then(() => {    
    app.listen(PORT,() => {
        console.log(`Server running on http://localhost:${PORT}/api/auth`)
    })
})