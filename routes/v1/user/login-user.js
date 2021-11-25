const router = require('express').Router();

const { Login } = require("../../../services/loginAuthService");



router.post("/login", Login);

module.exports = router