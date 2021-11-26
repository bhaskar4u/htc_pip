const User = require('../model/User');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' })
const JWT = require('jsonwebtoken');
const secretKey = process.env.secretKey
const {DecodeToken } = require('../services/loginAuthService')
module.exports = {
    UpdateUser: async (req, res) => {
        // let token = req.headers.authorization
        var token = await DecodeToken(req)
        

        try {
        //   console.log(token.id);
          
            let id = token.id

            let updateObject = {
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile
            }

            User.findByIdAndUpdate({ _id: id }, updateObject, { new: true }, (err, updres) => {
                if (err) return res.send({ status: 400, errmsg: err })

                return res.send({ status: 200, msg: "updated successfully", data: updres })

            })

        } catch (error) {
            return res.send({ satatus: 500, msg: "something went wrong", err: error })

        }

    }
}