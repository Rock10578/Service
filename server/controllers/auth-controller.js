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
        res
            .status(200)
            .send("Registration Page")
    } catch (error) {
        res.status(404).send({msg: "Page not found"})
    }
}

module.exports = {home,register}