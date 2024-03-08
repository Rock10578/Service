const express = require("express");
const router = express.Router();
const { home,register,login, user} = require("../controllers/auth-controller");
const {signupSchema,loginSchema} = require('../validators/auth-validator');
const validate = require('../midllewares/validate-middleware');
const authMiddleware = require('../midllewares/auth-middleware');

router.route('/').get(home)
router.route('/register').post(validate(signupSchema),register)
router.route('/login').post(validate(loginSchema),login)
router.route("/user").get(authMiddleware, user)

module.exports = router;