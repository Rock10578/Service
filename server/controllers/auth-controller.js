const home = async (req,res) => {
    try {
        res
            .status(200)
            .send("Welcome to service page by Rock10578");
    } catch (error) {
        console.log(error)
    }
}

const register = async (req,res) => {
    try {
        console.log(req.body)
        res
            .status(200)
            .json({msg: req.body})
    } catch (error) {
        res.status(400).send({msg: "Page not found"})
    }
}

module.exports = {home,register}