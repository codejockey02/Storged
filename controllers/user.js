const express = require('express');
const User = require('../models/user');
const register = require('./utils/signup');

const router = new express.Router();

router.get('/testget', async (req, res) => {
    res.json({
        message: "GET working"
    });
});

router.post('/testpost', async (req, res) => {
    const {
        name
    } = req.body;
    res.json({
        message: name
    });
});

router.post('/testimage', async (req, res) => {
    res.json({
        message: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
    })
});

router.post('/register', async (req, res) => {
    const {
        name,
        contact,
        password,
    } = req.body;
    register.registerUser(name, contact, password)
        .then(result => res.json({
            error: false,
            code: 201,
            output: result.message,
        }))
        .catch(() => res.json({
            error: true,
            code: 502,
            output: 'Unexpected error occured',
        }));
});

router.post('/login', async (req, res) => {
    const {
        contact,
        password,
    } = req.body;
    let check;
    try {
        check = await User.findOne({
            contact,
        }, {
            password: 1,
            name: 1,
        });
    } catch (err) {
        res.json({
            error: true,
            code: 501,
            output: 'Error making database call',
        });
    }
    try {
        if (password === check.password) {
            res.json({
                error: false,
                code: 201,
                output: 'Authenticated',
            });
        } else {
            res.json({
                error: true,
                code: 402,
                output: 'Incorrect Password',
            });
        }
    } catch (err) {
        res.json({
            error: true,
            code: 404,
            output: 'User does not exist',
        });
    }
});

module.exports = router;