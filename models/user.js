const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: mongoose.Schema.Types.String,
    contact: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('user', schema);