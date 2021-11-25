const router = require('express').Router();
const { VerifyToken } = require("../../../services/loginAuthService");
const { UpdateUser } = require("../../../services/updateUserService");



router.put("/update", UpdateUser);

module.exports = router