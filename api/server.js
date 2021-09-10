const express = require('express');

const server = express()

server.use(express.json())

const resourceRouter = require('./resource/resource-router')

server.use('/resources', resourceRouter)

module.exports = server 