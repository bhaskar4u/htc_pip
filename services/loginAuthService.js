const User = require('../model/User');
const Bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' })
const JWT = require('jsonwebtoken');
const secretKey = process.env.secretKey
module.exports = {
    Login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email })
        try {
            if (user) {
                if (Bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        name: user.name,
                        email: user.email,
                        age: user.age,
                        role: user.role,
                        id:user._id
                    }
                    let token = await JWT.sign(payload, secretKey, {
                        expiresIn: "2h"
                    })
                    let refreshToken = await JWT.sign(payload, secretKey, {
                        expiresIn: "1m"
                    })
                    res.status(200).send({ 
                        msg:"you have loggedin successfully",
                        token:token,
                     refreshToken:refreshToken
                    })
                } else {
                    res.send("password is not valid")
                }
            } else {
                res.send('Email is not valid')
                console.log("email not valid");
            }
        } catch (err) {
            res.status(401).send(err)
        }
    },
    VerifyToken: (req, res, next) => {
        //get Auth Header value
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader != "undefined") {
            const bearer = bearerHeader;
            const beareToken = bearer;
            req.token = beareToken;
            next();
        } else {
            res.status(403).send("forbidden");
        }
    },
    DecodeToken: (params) => {
        var token = params.headers["authorization"] || params.query["token"] || params.query["refreshToken"] ;
        var decoded = {};

        if (token) {
            decoded = JWT.verify(token, secretKey);
        }

        return decoded;
    }
}