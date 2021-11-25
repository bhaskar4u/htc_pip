const User = require('../model/User');

module.exports = {
    ListUser: async (req, res) => {
        try {
            const userList = await User.findOne({ _id: req.params.id })
            res.status(200).send({ userList })
        } catch (err) {
            res.status(400).send(err)
        }
    },
    SearchBar: async (req, res, next) => {
        const searchField = req.query.name;
        try {
            const users = await User.find({ name: { $regex: searchField, $options: '$i' } })
            res.send({
                status: res.status.code,
                data: JSON.parse(JSON.stringify(users))
            })
        } catch (err) {
            res.send({
                err
            })
        }
    }
}