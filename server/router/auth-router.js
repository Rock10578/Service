const express = require("express");
const router = express.Router();
const { home,register,login } = require("../controllers/auth-controller");
const {signupSchema,loginSchema} = require('../validators/auth-validator')
const validate = require('../midllewares/validate-middleware')

router.route('/').get(home)
router.route('/register').post(validate(signupSchema),register)
router.route('/login').post(validate(loginSchema),login)

module.exports = router;