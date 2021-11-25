const router = require('express').Router();
const { DeleteUser } = require("../../../services/deleteUserService");



router.delete("/delete", DeleteUser);

module.exports = router