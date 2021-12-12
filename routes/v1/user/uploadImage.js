const router = require('express').Router();
const { upload ,uploadImage} = require('../../../services/uploadBinaryService')
// const { VerifyToken } = require('../../../services/loginAuthService')


router.post('/image-test', upload.single('image'), uploadImage)

module.exports = router