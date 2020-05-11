const mongoose = require('mongoose');

const schema = mongoose.Schema({
    contact: mongoose.Schema.Types.String,
    type: mongoose.Schema.Types.String,
    name: mongoose.Schema.Types.String,
    nickname: mongoose.Schema.Types.String,
    dob: mongoose.Schema.Types.Date,
    email: mongoose.Schema.Types.String,
    gender: mongoose.Schema.Types.String,
    url: mongoose.Schema.Types.String,
    photos: [mongoose.Schema.Types.String]
}, {
    timestamps: true,
});

module.exports = mongoose.model('user', schema);