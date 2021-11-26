const router = require('express').Router();
const { VerifyToken } = require("../../../services/loginAuthService");
const { UpdateUser } = require("../../../services/updateUserService");



router.put("/update",VerifyToken, UpdateUser);

module.exports = router