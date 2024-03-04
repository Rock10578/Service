const Contact = require('../models/contact-model')

const contactForm = async (req,res) => {
    try {
        await Contact.create(req.body)
        return res.status(200).json({message: "Message send successfull"})
    } catch (error) {
        return res.status(400).json({message: "Contact failed"})
    }
}

module.exports = contactForm