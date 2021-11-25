const router = require('express').Router();
const { RegisterUser } = require("../../../services/createUserService");



router.post("/register", RegisterUser);

module.exports = router