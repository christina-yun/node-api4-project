const express = require ('express');

const server = express();

server.use(express.json());

//[GET] /api/users
server.get('/api/users', (req, res) => {})

//[POST] /api/register
server.post('/api/register/', (req, res) => {})

//[POST] /api/login
server.post('/api/login', (req, res) => {})

module.exports = server;