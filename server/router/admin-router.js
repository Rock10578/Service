const express = require("express");
const { getAllUsers, getAllContacts } = require("../controllers/admin-controller");
const authMiddleware = require("../midllewares/auth-middleware");
const router = express.Router();

router.route('/users').get(authMiddleware,getAllUsers);
router.route('/contacts').get(authMiddleware,getAllContacts);

module.exports = router;