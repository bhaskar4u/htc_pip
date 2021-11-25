const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    age: {
        type: Number,
        required: true

    },
    role: {
        type: String,
        required: true

    },
    mobile: {
        type: Number,
        required: true

    },
    password: {
        type: String,
        required: true

    }
})


module.exports = mongoose.model("Users", userSchema)