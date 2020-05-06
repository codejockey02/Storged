const User = require('../../models/user');


exports.registerUser = async (name, contact, password) => {
    const newUser = new User({
        name,
        contact,
        password,
    });
    let check;
    try {
        check = await User.findOne({
            contact,
        }, {
            password: 1,
        });
    } catch (err) {
        console.log(err);
        return {
            message: 'Error making database call',
        };
    }
    let message;
    try {
        if (check != null) {
            message = 'User already exist';
        } else {
            await newUser.save();
            message = 'User Registered';
        }
    } catch (err) {
        message = 'Internal Server Error';
    }
    return {
        message,
    };
};