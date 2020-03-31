const express = require('express')
const app = express()

const TodoRouter = require('./todoRouter')
const UserRouter = require('./userRouter')
const APIRouter = require('./APIrouter')

app.use('/',TodoRouter)
app.use('/user', UserRouter)
app.use('/api', APIRouter)

module.exports = app