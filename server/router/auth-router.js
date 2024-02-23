const express = require("express");
const router = express.Router();

router.route('/').get((req,res) => {
    res
        .status(200)
        .send("Welcome to service page by Rock10578");
});

router.route('/register').get((req,res) => {
    res
        .status(200)
        .send("Registration Page")
})

module.exports = router;