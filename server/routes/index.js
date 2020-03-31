const express = require('express')
const app = express()

const TodoRouter = require('./todoRouter')
const UserRouter = require('./userRouter')

app.use('/',TodoRouter)
app.use('/user', UserRouter)

module.exports = app