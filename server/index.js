const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth", router);

const PORT = 4000
app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}/api/auth`)
})