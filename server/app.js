const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const TodoRouter = require('./routes/todoRouter')
const ErrorHandler = require('./middleware/errorHandler')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=> res.send("fancy to-do"))

app.use('/', TodoRouter)


app.use(ErrorHandler)


app.listen(port, ()=>console.log(`listening on port ${port}`))