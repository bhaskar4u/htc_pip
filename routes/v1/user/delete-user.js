const router = require('express').Router();
const { VerifyToken } = require("../../../services/loginAuthService");

const { DeleteUser } = require("../../../services/deleteUserService");



router.delete("/delete",VerifyToken, DeleteUser);

module.exports = router