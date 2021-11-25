const User = require('../model/User');
const Bcrypt = require('bcryptjs');

module.exports = {
    RegisterUser: async (req, res) => {
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) return res.status(409).send("use another email,An User Already Exist");
        const hashPwd = await Bcrypt.hashSync(req.body.password, 10)
        const userAge = req.body.age
        if(userAge < 20 || userAge > 30) return res.status(409).send("Your Age restricted to be a member");
        
        const user = await User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hashPwd,
            role:req.body.role,
            age:req.body.age
        })
        try {
            user.save()
                .then(resData => {
                    res.status(200).send({ resData })
                })
                .catch(err => {
                    res.status(401).send(err)
                })
        } catch (err) {
            res.status(500).send(err)
        }
    }
}