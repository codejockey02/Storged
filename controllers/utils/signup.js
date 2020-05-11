const User = require('../../models/user');


exports.registerUser = async (contact, type, name, nickname, dob, email, gender, photosURL) => {
    const newUser = new User({
        contact,
        type,
        name,
        nickname,
        dob,
        email,
        gender,
        $addToSet: {
            photos: {
                $each: photosURL
            }
        }
    });
    let check;
    try {
        check = await User.findOne({
            contact,
        }, {
            name: 1,
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