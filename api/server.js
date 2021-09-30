const express = require ('express');
const Users = require('./users/model');

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
server.post('/api/users/', (req, res) => {});

//[POST] /api/login
server.post('/api/login', (req, res) => {});


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