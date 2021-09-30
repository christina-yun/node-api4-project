const express = require ('express');
const Users = require('./users/model');
const { validateRegistrationInput } = require('./middleware/middleware');

const server = express();

server.use(express.json());

//[GET] /api/users
server.get('/api/users', (req, res, next) => {
    Users.findUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
});

//[POST] /api/users
server.post('/api/users/', validateRegistrationInput, (req, res, next) => {
    Users.registerUser(req.body)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(next)
});

//[POST] /api/login
server.post('/api/login', (req, res, next) => {
    Users.loginUser(req.body)
        .then(resp => {
            console.log(resp)
        })
        .catch(next)
});


//error catchall
server.use('*', (req, res, next) => {
    next({status: 404, message: `${req.method} ${req.originalUrl} not found`});
});

function errorHandling(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message
    });
}

server.use(errorHandling);

module.exports = server;