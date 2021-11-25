const router = require('express').Router();
const { ListUser } = require('../../../services/listUserService')
const { VerifyToken } = require('../../../services/loginAuthService')


router.get('/list-user/:id', VerifyToken, ListUser)

module.exports = router