require('dotenv').config()
const jwt = require('jsonwebtoken')

function authentication(req, res, next) {
    console.log('authentication')
    console.log(req.headers.token)
    let token = req.headers.token
    try{
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userdata = decoded 
        console.log('----------')
        console.log(req.userdata)
        next()
    }
    catch(err){
        res.status(400).json(err)
    }

}

module.exports = authentication