const express = require("express");
const { getAllUsers, getAllContacts, deleteUserById } = require("../controllers/admin-controller");
const authMiddleware = require("../midllewares/auth-middleware");
// const adminMiddleware = require("../midllewares/admin-middleware");
const router = express.Router();


// Need to correct the adminMiddleware code to allow only admin to access the userdata
router.route('/users').get(authMiddleware, getAllUsers);
router.route("/users/delete/:id").delete(authMiddleware, deleteUserById);
router.route('/contacts').get(authMiddleware, getAllContacts);

module.exports = router;