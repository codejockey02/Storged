const express = require('express');
const mongoclient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const env = require('./env.js');

env();

const app = express();
app.use(bodyParser.json({
    limit: '25mb',
}));
bodyParser.urlencoded({
    extended: true,
    limit: '25mb',
});

// mongoose.Promise = global.Promise;

const userController = require('./controllers/user');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to Database.');
}).catch((err) => {
    console.log(err.stack.toString());
});

// mongoclient.connect(process.env.MONGO_URL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }).then(() => {
//     console.log('Connected to Database.');
// }).catch((err) => {
//     console.log(err.stack.toString());
// });

app.use('/', userController);

app.listen(process.env.PORT);
console.log('App Runs on ');
console.log(process.env.PORT);