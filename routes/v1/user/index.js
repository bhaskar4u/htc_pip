const createuser = require('./create-user');
const listuser = require('./list-user');
const login = require('./login-user');
const updateuser = require('./update-user');
const deleteuser = require('./delete-user');
const uploadImage = require('./uploadImage');





module.exports = [createuser, listuser,login,updateuser,deleteuser,uploadImage]