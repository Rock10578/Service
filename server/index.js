const express = require("express")
const app = express()

app.get('/', (req,res) => {
    res.status(200).send("Welcome to Service site");
})

app.get('/register', (req,res) => {
    res.send("Register Here")
})

app.get('/login', (req,res) => {
    res.send("Login Here")
})

const PORT = 4000
app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`)
})