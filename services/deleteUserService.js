const User = require('../model/User');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' })
const JWT = require('jsonwebtoken');
const secretKey = process.env.secretKey
module.exports = {
    DeleteUser: async (req, res) => {
        let token = req.headers.authorization
        try {
            var decoded = {};

            if (token) {
                decoded = JWT.verify(token, secretKey);
            } else {
                return res.send({ status: 400, msg: "please provide the token" })
            }
            let role = decoded.role
            let userEmail = req.body.email
            if(role == "manager"){
                User.findOneAndDelete({email:userEmail}, (err, delres) => {
                    if (err) return res.send({ status: 400, errmsg: err })
    
                    return res.send({ status: 200, msg: "deleted successfully", data: delres })
                })
            }else{
                return res.send({status:403,msg:"You are not permitted to perform deletion"})
            }

            // User.findByIdAndUpdate({ _id: id }, updateObject, { new: true }, (err, updres) => {
            //     if (err) return res.send({ status: 400, errmsg: err })

            //     return res.send({ status: 200, msg: "updated successfully", data: updres })

            // })

        } catch (error) {
            return res.send({ satatus: 500, msg: "something went wrong", err: error })

        }

    }
}